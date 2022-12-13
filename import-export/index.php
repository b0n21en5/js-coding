<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script type="module" src="main.js"></script>
    <script type="text/javascript">
        let a = 5, b=2;
        function run(x, y){
        document.getElementById('results').innerHTML = 'summation function results: ' + (Number(x) + Number(y)); 
        
        document.getElementById('results2').innerHTML = 'subtraction function results: '+ (x - y);
    }
        
    </script>
    <title>Document</title>
</head>
<body style="text-align:center">
    <h1>import & export in JavaScript</h1>
    <p>num 1:</p><input type="number" id="x"><p>num 2:</p> <input type="number" id="y">
    <button id="submit" onclick="run(document.getElementById('x').value,document.getElementById('y').value)" type="submit">Submit</button>
    <h4 id="results">sum result will come here</h4>
    <h4 id="results2">subtraction result will come here</h4>


    


</body>
</html>