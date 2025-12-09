 function updateBudget() {
            const venue = parseFloat(document.getElementById('venue').value) || 0;
            const catering = parseFloat(document.getElementById('catering').value) || 0;
            const photography = parseFloat(document.getElementById('photography').value) || 0;
            const decorations = parseFloat(document.getElementById('decorations').value) || 0;
            const attire = parseFloat(document.getElementById('attire').value) || 0;
            const music = parseFloat(document.getElementById('music').value) || 0;
            
            const total = venue + catering + photography + decorations + attire + music;
            document.getElementById('totalBudget').textContent = '$' + total.toLocaleString();
        }

        function addTodo() {
            const input = document.getElementById('todoInput');
            const text = input.value.trim();
            
            if (text === '') return;
            
            const todoList = document.getElementById('todoList');
            const todoItem = document.createElement('div');
            todoItem.className = 'todo-item';
            todoItem.innerHTML = `
                <input type="checkbox" onchange="toggleTodo(this)">
                <span>${text}</span>
                <button onclick="deleteTodo(this)">Delete</button>
            `;
            
            todoList.appendChild(todoItem);
            input.value = '';
            updateProgress();
        }

        function toggleTodo(checkbox) {
            const todoItem = checkbox.parentElement;
            if (checkbox.checked) {
                todoItem.classList.add('completed');
            } else {
                todoItem.classList.remove('completed');
            }
            updateProgress();
        }

        function deleteTodo(button) {
            button.parentElement.remove();
            updateProgress();
        }

        function updateProgress() {
            const todos = document.querySelectorAll('.todo-item');
            const completed = document.querySelectorAll('.todo-item.completed').length;
            const total = todos.length;
            const remaining = total - completed;
            
            const percentage = total > 0 ? Math.round((completed / total) * 100) : 0;
            
            document.getElementById('overallProgress').style.width = percentage + '%';
            document.getElementById('overallProgress').textContent = percentage + '%';
            document.getElementById('tasksCompleted').textContent = completed;
            document.getElementById('tasksRemaining').textContent = remaining;
        }

        document.getElementById('todoInput').addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                addTodo();
            }
        });

        updateBudget();
        updateProgress();
