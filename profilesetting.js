function enableEdit(section) {
  const inputs = document.querySelectorAll(`#${section}Card input`);
  inputs.forEach(i => i.disabled = false);

  const btnGroup = document.getElementById(`${section}Buttons`);
  btnGroup.innerHTML = `
    <button class="save-btn" onclick="saveChanges('${section}')">Save</button>
    <button class="cancel-btn" onclick="cancelEdit('${section}')">Cancel</button>
  `;
}

function saveChanges(section) {
  const inputs = document.querySelectorAll(`#${section}Card input`);
  inputs.forEach(i => i.disabled = true);

  if (section === 'personal') {
    document.getElementById('profileName').textContent =
      document.getElementById('fullName').value;
    document.getElementById('profileEmail').textContent =
      document.getElementById('email').value;
  }

  showSuccess();
  resetButtons(section);
}

function cancelEdit(section) {
  const inputs = document.querySelectorAll(`#${section}Card input`);
  inputs.forEach(i => i.disabled = true);
  resetButtons(section);
}

function resetButtons(section) {
  const btnGroup = document.getElementById(`${section}Buttons`);
  btnGroup.innerHTML = `<button class="edit-btn" onclick="enableEdit('${section}')">Edit</button>`;
}

function showSuccess() {
  const msg = document.getElementById('successMessage');
  msg.classList.add('show');
  setTimeout(() => msg.classList.remove('show'), 3000);
}

