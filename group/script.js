// Sample data structure
const groups = [
    {
        name: "Group 1",
        friends: ["Friend 1", "Friend 2", "Friend 3"],
        transactions: [
            { payer: "Friend 1", amount: 30, participants: ["Friend 1", "Friend 2"] },
            { payer: "Friend 3", amount: 20, participants: ["Friend 1", "Friend 3"] }
        ]
    }
];

// Function to render groups
function renderGroups() {
    const groupsContainer = document.getElementById("groups-container");
    groupsContainer.innerHTML = "";

    groups.forEach(group => {
        const groupDiv = document.createElement("div");
        groupDiv.className = "group";
        groupDiv.innerHTML = `<h3>${group.name}</h3><p>Friends: ${group.friends.join(", ")}</p>`;
        groupDiv.addEventListener("click", () => showGroupTransactions(group));
        groupsContainer.appendChild(groupDiv);
    });

    // Add a button to create a new group
    const newGroupButton = document.createElement("button");
    newGroupButton.textContent = "New Group";
    newGroupButton.addEventListener("click", showNewGroupModal);
    groupsContainer.appendChild(newGroupButton);
}

// Function to render transactions for a group
function showGroupTransactions(group) {
    const transactionsContainer = document.getElementById("transactions-container");
    transactionsContainer.innerHTML = "";

    group.transactions.forEach(transaction => {
        const transactionDiv = document.createElement("div");
        transactionDiv.className = "transaction";
        transactionDiv.innerHTML = `<p>Payer: ${transaction.payer}</p><p>Amount: ${transaction.amount}</p><p>Participants: ${transaction.participants.join(", ")}</p>`;
        transactionsContainer.appendChild(transactionDiv);
    });
}

// Function to show the modal for creating a new group
function showNewGroupModal() {
    const modal = document.getElementById("newGroupModal");
    modal.innerHTML = `
        <label for="groupName">Group Name:</label>
        <input type="text" id="groupName" />
        <label for="friends">Friends (comma-separated):</label>
        <input type="text" id="friends" />
        <button onclick="createNewGroup()">Create Group</button>
    `;
    modal.style.display = "block";
}

// Function to create a new group
function createNewGroup() {
    const groupName = document.getElementById("groupName").value;
    const friendsInput = document.getElementById("friends").value;
    const friends = friendsInput.split(",").map(friend => friend.trim());

    // Add your logic to create a new group with the provided data
    // For now, let's just push a dummy group to the groups array
    groups.push({ name: groupName, friends: friends, transactions: [] });

    // Close the modal and re-render groups
    hideModal();
    renderGroups();
}

// Function to hide the modal
function hideModal() {
    const modal = document.getElementById("newGroupModal");
    modal.style.display = "none";
}

// Initial rendering
renderGroups();
