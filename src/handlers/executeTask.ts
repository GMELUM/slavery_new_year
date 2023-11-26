const executeTask = (type: string) => new Promise<boolean>((resolve) => {
  setTimeout(() => {
    console.log(type);
    resolve(true);
  }, 2000)
})

export default executeTask;
