async function copyID(id, button) {
  try {
    await navigator.clipboard.writeText(id);

    const original = button.innerHTML;
    button.innerHTML = 'Copied! <i class="fas fa-check"></i>';

    setTimeout(() => {
      button.innerHTML = original;
    }, 1500);
  } catch (error) {
    console.error("Failed to copy player ID:", error);
  }
}
