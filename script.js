document.querySelector("#push").onclick= function(){
    if
       ( document.querySelector('.newtask input').value.length == 0)
   { 
        // alert('Please enter the value')
   }
    else{
        document.querySelector('.tasks').innerHTML 
        += `
        <div class="task">
        <div id="taskname">${document.querySelector('.newtask input').value}
    </div>
    <button class ="delete">DELETE</button>
      </div>
        `;
        var currentTask = document.querySelectorAll(".delete");
        for(var i=0; i<currentTask.length; i++){
            currentTask[i].onclick = function(){
                this.parentNode.remove();
            }
        }
        var taskname = document.querySelectorAll(".taskname")
        taskname.onclick=function(){
            
        }
        var tasks = document.querySelectorAll('.task')
        for(var i=0; i<tasks.length; i++){
            tasks[i].onclick= function(){
                this.classList.toggle('completed')
            }
        }
        document.querySelector('.newtask input').value=
        "";
    }
}

