async function main(){
    let pyodide = await loadPyodide({
      indexURL : "https://cdn.jsdelivr.net/pyodide/v0.19.0/full/"
    });

    console.log(pyodide.runPython('print("hello world")'));










  }
main();