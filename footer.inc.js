<footer style="background:#333;color:#fff;text-align:center;padding:20px;margin-top:40px;">
    <p>&copy; <?php echo date('Y'); ?> Hope On Wheel. All Rights Reserved.</p>
</footer>

<!-- Toast Container -->
<div id="toast" class="toast" style="display:none;"></div>

<script src="script.js"></script>
<script>
function showToast(message, type = 'info', duration = 3000) {
    const toast = document.getElementById('toast');
    toast.textContent = message;
    toast.style.display = 'block';
    toast.style.background = type === 'success' ? '#28a745' : (type === 'error' ? '#dc3545' : '#333');
    toast.style.color = 'white';
    toast.style.padding = '12px 24px';
    toast.style.borderRadius = '6px';
    toast.style.position = 'fixed';
    toast.style.bottom = '20px';
    toast.style.right = '20px';
    toast.style.boxShadow = '0 4px 12px rgba(0,0,0,0.2)';
    toast.style.transition = 'opacity 0.3s ease';

    setTimeout(() => {
        toast.style.opacity = '0';
        setTimeout(() => toast.style.display = 'none', 500);
    }, duration);
}
</script>

</body>
</html>