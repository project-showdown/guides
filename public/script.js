function switchTab(tabName) {
    // Hide both sections
    document.getElementById('userGuide').style.display = 'none';

    // Show the selected section
    document.getElementById(tabName).style.display = 'block';
}

// Default to showing the User Guide
document.getElementById('userGuideTab').click();
