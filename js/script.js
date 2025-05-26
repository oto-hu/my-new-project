document.addEventListener('DOMContentLoaded', function() {
    // Mobile navigation toggle
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function() {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });

        // Close mobile menu when clicking on a link
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', function() {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });
    }

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Set active navigation item based on current page
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const currentPath = window.location.pathname;
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        const href = link.getAttribute('href');
        if (href === currentPage || 
            (currentPage === '' && href === 'index.html') ||
            (currentPath.includes('/news/') && href.includes('news')) ||
            (currentPath.includes('/events/') && href.includes('events')) ||
            (currentPath.includes('/registration/') && href.includes('registration')) ||
            (currentPath.includes('/abstracts/') && href.includes('abstracts')) ||
            (currentPath.includes('/members/') && href.includes('members'))) {
            link.classList.add('active');
        }
    });

    // Test automation functionality
    const testButton = document.getElementById('test-button');
    const testResult = document.getElementById('test-result');
    
    if (testButton && testResult) {
        testButton.addEventListener('click', function() {
            // Simulate a test execution
            testButton.disabled = true;
            testButton.textContent = 'テスト中...';
            
            setTimeout(() => {
                const success = Math.random() > 0.3; // 70% success rate
                
                testResult.className = 'test-result ' + (success ? 'success' : 'error');
                testResult.textContent = success 
                    ? '✅ 自動テストが正常に完了しました！' 
                    : '❌ テストでエラーが発生しました。もう一度お試しください。';
                
                testButton.disabled = false;
                testButton.textContent = 'テスト実行';
            }, 2000);
        });
    }
});