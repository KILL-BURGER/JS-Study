let taskInput = document.getElementById('task-input');
let addButton = document.getElementById('add-button');
let tabs = document.querySelectorAll('.task-tabs div');
let taskList = [];
let target = 'all';
let filterList = [];
addButton.addEventListener('click', addTask);

for (let i = 1; i < tabs.length; i++) {
    tabs[i].addEventListener('click', function (event) {
        filter(event);
    });
}

function addTask() {
    let task = {
        id: randomIDGenerate(),
        taskContent: taskInput.value,
        isComplete: false
    };
    taskList.push(task);
    render();
}

function toggleComplete(id) {
    for (let i = 0; i < taskList.length; i++) {
        if (taskList[i].id === id) {
            taskList[i].isComplete = !taskList[i].isComplete;
            break;
        }
    }
    render();
}

function deleteTask(id) {
    for (let i = 0; i < taskList.length; i++) {
        if (taskList[i].id === id) {
            taskList.splice(i, 1);
            break;
        }
    }
    render();
}

function filter(event) {
    target = event.target.id;

    filterList = [];
    if (target === 'all') {
        render();
    } else if (target === 'ongoing') {
        for (let i = 0; i < taskList.length; i++) {
            if (!taskList[i].isComplete) {
                filterList.push(taskList[i]);
            }
        }
        render();
    } else if (target === 'done') {
        for (let i = 0; i < taskList.length; i++) {
            if (taskList[i].isComplete) {
                filterList.push(taskList[i]);
            }
        }
        render();
    }

}

function render() {
    let list = [];
    if (target === 'all') {
        list = taskList;
    } else if (target === 'ongoing' || target === 'done') {
        list = filterList;
    }

    let resultHTML = '';
    for (let i = 0; i < list.length; i++) {
        if (list[i].isComplete) {
            resultHTML += `<div class="task">
                        <div class="task-done">${list[i].taskContent}</div>
                        <div>
                            <button onclick="toggleComplete('${list[i].id}')">Check</button>
                            <button onclick="deleteTask('${list[i].id}')">Delete</button>
                        </div>
                      </div>`;
        } else {
            resultHTML += `<div class="task">
                        <div>${list[i].taskContent}</div>
                        <div>
                            <button onclick="toggleComplete('${list[i].id}')">Check</button>
                            <button onclick="deleteTask('${list[i].id}')">Delete</button>
                        </div>
                      </div>`;
        }
    }
    // 할일 목록 HTML 추가
    document.getElementById('task-board').innerHTML = resultHTML;
}

function randomIDGenerate() {
    return `_${Math.random().toString(36).substr(2, 9)}`;
}