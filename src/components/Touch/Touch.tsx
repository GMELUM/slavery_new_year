import { FC, HTMLAttributes, RefCallback, useRef } from "react";

export interface Gesture {
    startX?: number;
    startY?: number;
    startT?: Date;
    isPressed?: boolean;
    isY?: boolean;
    isX?: boolean;
    isSlideX?: boolean;
    isSlideY?: boolean;
    isSlide?: boolean;
    shiftX?: number;
    shiftY?: number;
    shiftXAbs?: number;
    shiftYAbs?: number;
}

export interface GestureEvent extends Gesture {
    originalEvent: TouchEvent | MouseEvent;
}

interface ITouch extends HTMLAttributes<HTMLDivElement> {
    onStart?(event: GestureEvent | TouchEvent | MouseEvent): void;
    onStartX?(event: GestureEvent | TouchEvent | MouseEvent): void;
    onStartY?(event: GestureEvent): void;
    onMove?(event: GestureEvent): void;
    onMoveX?(event: GestureEvent): void;
    onMoveY?(event: GestureEvent): void;
    onEnd?(event: GestureEvent): void;
    onEndX?(event: GestureEvent): void;
    onEndY?(event: GestureEvent): void;
    useCapture?: boolean;
}

type TSupportEvents = ["touchstart" | "mousedown", "touchmove" | "mousemove", "touchend" | "mouseup", "touchcancel" | "mouseleave"];

export const isTouchSupport = window && 'ontouchstart' in window;

export const supportEvents = (): TSupportEvents => isTouchSupport ?
    ['touchstart', 'touchmove', 'touchend', 'touchcancel'] :
    ['mousedown', 'mousemove', 'mouseup', 'mouseleave'];

const coordX = (e: any): number => e?.clientX || e?.changedTouches?.[0]?.clientX || 0;
const coordY = (e: any): number => e?.clientY || e?.changedTouches?.[0]?.clientY || 0;

const Touch: FC<ITouch> = ({
    onStart,
    onStartX,
    onStartY,
    onMove,
    onMoveX,
    onMoveY,
    onEnd,
    onEndX,
    onEndY,
    onClick,
    useCapture,
    children,
    ...restProps
}) => {

    const cancelClick = useRef<boolean>(false);
    const gesture = useRef<Gesture>({});

    function Start(event: any) {
        const motion = gesture.current;
        gesture.current = {
            ...motion,
            startX: coordX(event),
            startY: coordY(event),
            startT: new Date(),
            isPressed: true
        }
        const outEvent = {
            ...gesture.current,
            originalEvent: event
        }
        onStart && onStart(outEvent);
        onStartX && onStartX(outEvent);
        onStartY && onStartY(outEvent);
    }

    function Move(event: any) {
        const motion = gesture.current;
        const { isPressed, isX, isY, startX, startY } = motion;
        if (isPressed) {

            if (!!event.touches && event.touches.length > 1) {
                return End(event);
            }

            const shiftX = coordX(event) - (startX || 0);
            const shiftY = coordY(event) - (startY || 0);
            const shiftXAbs = Math.abs(shiftX);
            const shiftYAbs = Math.abs(shiftY);

            if (!isX && !isY) {
                let willBeX = shiftXAbs >= 5 && shiftXAbs > shiftYAbs;
                let willBeY = shiftYAbs >= 5 && shiftYAbs > shiftXAbs;
                let willBeSlidedX = willBeX && (!!onMoveX || !!onMove);
                let willBeSlidedY = willBeY && (!!onMoveY || !!onMove);

                gesture.current.isX = willBeX;
                gesture.current.isY = willBeY;
                gesture.current.isSlideX = willBeSlidedX;
                gesture.current.isSlideY = willBeSlidedY;
                gesture.current.isSlide = willBeSlidedX || willBeSlidedY;
            }

            if (gesture.current.isSlide) {
                gesture.current.shiftX = shiftX;
                gesture.current.shiftY = shiftY;
                gesture.current.shiftXAbs = shiftXAbs;
                gesture.current.shiftYAbs = shiftYAbs;

                const outEvent = {
                    ...gesture.current,
                    originalEvent: event
                }
                onMove && onMove(outEvent);
                gesture.current.isSlideX && onMoveX && onMoveX(outEvent);
                gesture.current.isSlideY && onMoveY && onMoveY(outEvent);
            }
        }
    }

    function End(event: any) {
        const motion = gesture.current;
        const { isPressed, isSlide, isSlideX, isSlideY } = motion;
        if (isPressed) {
            const outEvent = {
                ...gesture.current,
                originalEvent: event
            }
            onEnd && onEnd(outEvent);
            isSlideY && onEndY && onEndY(outEvent);
            isSlideX && onEndX && onEndX(outEvent);
        }
        const target = event.target as HTMLElement;
        cancelClick.current = target.tagName === "A" && (isSlide || false);
        gesture.current = {};
    }

    function onclick(event: any) {
        if (cancelClick.current) {
            cancelClick.current = false;
            event.preventDefault();
        }
        onClick && onClick(event);
    }

    function onDragStart(event: any) {
        // const target = event.target as HTMLElement;
        // if (target.tagName === 'A' || target.tagName === 'IMG') {
        //     event.preventDefault();
        // }
    };

    // const getRef: RefCallback<HTMLElement> = (c) => { container.current = c! }

    const propsEvent = isTouchSupport ? {
        onClick: onclick,
        onDragStart: onDragStart,
        onTouchStart: Start,
        onTouchMove: Move,
        onTouchEnd: End,
        onTouchCancel: End
    } : {
        onClick: onclick,
        onDragStart: onDragStart,
        onMouseDown: Start,
        onMouseMove: Move,
        onMouseUp: End,
        onMouseLeave: End
    }

    return (
        <div {...restProps} {...propsEvent}>
            {children}
        </div>
    )
}

export default Touch;
