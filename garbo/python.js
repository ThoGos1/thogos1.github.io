async function main(){
    let pyodide = await loadPyodide({
        indexURL : "https://cdn.jsdelivr.net/pyodide/v0.19.0/full/"
    });

    let response = await fetch('javapy.py', {mode:'no-cors'});
    let x = await response.text();
    pyodide.runPython(String(x));
    
    let y = pyodide.globals.get('num');
    console.log("tester " + String(y));
    
    document.getElementById('pyvar').innerHTML = y;
    
    console.log(poop);
    
}    
main();