// Sidebar toggle
const sidebar = document.getElementById("sidebar");
const menuToggle = document.querySelector("nav .bx-menu");

menuToggle.addEventListener("click", () => {
	sidebar.classList.toggle("hide");
});

// Add Order
document.getElementById("addOrderBtn").addEventListener("click", () => {
	const orderBody = document.getElementById("orderBody");
	const row = document.createElement("tr");
	row.innerHTML = `
		<td><img src="img/people.png"> New User</td>
		<td>${new Date().toLocaleDateString()}</td>
		<td><span class="status">Pending</span></td>
		<td><button class="delete-btn">Delete</button></td>
	`;
	orderBody.appendChild(row);
});

// Delete Order using event delegation
document.getElementById("orderTable").addEventListener("click", (e) => {
	if (e.target.classList.contains("delete-btn")) {
		e.target.closest("tr").remove();
	}
});

// Add Todo
function addTodo() {
	const todoList = document.getElementById("todoList");
	const li = document.createElement("li");
	li.innerHTML = `<p>New Task</p><i class='bx bx-trash'></i>`;
	todoList.appendChild(li);
}

// Delete Todo using delegation
document.getElementById("todoList").addEventListener("click", (e) => {
	if (e.target.classList.contains("bx-trash")) {
		e.target.closest("li").remove();
	}
});

// Responsive: Hide sidebar on small screens
function autoResponsiveSidebar() {
	if (window.innerWidth < 768) {
		sidebar.classList.add("hide");
	} else {
		sidebar.classList.remove("hide");
	}
}

window.addEventListener("resize", autoResponsiveSidebar);
window.addEventListener("load", autoResponsiveSidebar);
