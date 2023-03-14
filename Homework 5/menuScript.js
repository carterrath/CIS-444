window.addEventListener("load",start);
        function start(){
            let button = document.getElementById("getTotal");
            button.addEventListener("click", calculate)
            function calculate(e){
                let total = document.getElementById("totalCost");
                let checkboxes = document.getElementsByClassName("checkbox");
                var total_cost = 0.0;
                for(var x in checkboxes){
                    if(checkboxes[x].checked == true){
                        var item_cost = parseFloat(checkboxes[x].value);
                        total_cost += item_cost;
                    }
                }
                total.style.display = "block";
                total.innerText = " $" + total_cost.toFixed(2);
                e.preventDefault();
            }
        }