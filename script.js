

function toggleTheme() {
    const body = document.body;
    const currentTheme = body.getAttribute('data-theme');
  
    if (currentTheme === 'light') {
      body.setAttribute('data-theme', 'dark');
    } else {
      body.setAttribute('data-theme', 'light');
    }
  }
  
  function toggleMenu() {
    const navLinks = document.getElementById('navLinks');
    navLinks.classList.toggle('active');
  }
  
  document.addEventListener("DOMContentLoaded", () => {
    // Efeito de Fade In para cada projeto ao carregar
    const projetos = document.querySelectorAll(".projeto");
    projetos.forEach((projeto, index) => {
      setTimeout(() => {
        projeto.style.opacity = "1";
        projeto.style.transform = "translateY(0)";
      }, index * 300); 
    });
  
    const imagens = document.querySelectorAll(".projeto-imagem img");
    imagens.forEach((img) => {
      img.addEventListener("mouseenter", () => {
        img.style.transform = "scale(1.1)";
        img.style.transition = "transform 0.3s ease";
      });
      img.addEventListener("mouseleave", () => {
        img.style.transform = "scale(1)";
      });
    });
  });
  const languageInfo = {
    HTML: {
      title: "HTML",
      info: "HTML é a linguagem de marcação que forma a estrutura de todas as páginas da web. Minha jornada começou com a criação de tags simples, como parágrafos, títulos e imagens, até desenvolver estruturas complexas com formulários, tabelas e divisões de página. Hoje, entendo a importância da semântica HTML para SEO e acessibilidade."
    },
    CSS: {
      title: "CSS",
      info: "CSS é a linguagem que estiliza o conteúdo da web. Com CSS, aprendi a aplicar cores, margens e a controlar o layout das páginas usando Flexbox e Grid. Além disso, entendo técnicas avançadas de animação e transição, fundamentais para criar experiências mais ricas e dinâmicas para o usuário."
    },
    JavaScript: {
      title: "JavaScript",
      info: "JavaScript é a linguagem de programação que permite adicionar interatividade às páginas web. Minha experiência inclui manipulação do DOM, criação de animações, uso de APIs e desenvolvimento de aplicações complexas no lado do cliente. JavaScript me permitiu entender a lógica de programação e aplicar conceitos como loops, condicionais e funções."
    },
    SQL: {
      title: "SQL",
      info: "SQL é a linguagem de consulta de bancos de dados. Aprendi a usar SQL para recuperar e manipular dados, criar e atualizar tabelas e realizar operações complexas de join e filtragem. Entendo a importância da otimização de consultas e boas práticas para organizar e proteger dados em um sistema."
    }
  };
  
  function openInfo(language) {
    const modal = document.getElementById("infoModal");
    document.getElementById("language-title").textContent = languageInfo[language].title;
    document.getElementById("language-info").textContent = languageInfo[language].info;
    modal.style.display = "flex";
  }
  
  function closeInfo() {
    document.getElementById("infoModal").style.display = "none";
  }
  
  
  function closeInfoOnOutsideClick(event) {
    const modalContent = document.querySelector(".modal-content");
    if (!modalContent.contains(event.target)) {
      closeInfo();
    }
  }
  
  function validateForm() {
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const message = document.getElementById("message").value.trim();
  
    if (name === "" || email === "" || phone === "" || message === "") {
      alert("Por favor, preencha todos os campos.");
      return false;
    }
  
    if (!validateEmail(email)) {
      alert("Por favor, insira um e-mail válido.");
      return false;
    }
  
    if (!validatePhone(phone)) {
      alert("Por favor, insira um número de telefone válido.");
      return false;
    }
  
    alert("Formulário enviado com sucesso!");
    return true;
  }
  
  function validateEmail(email) {
    const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return re.test(email);
  }
  
  function validatePhone(phone) {
    const re = /^\(\d{2}\) \d{4,5}-\d{4}$/;
    return re.test(phone);
  }
  
  function formatPhone() {
    const input = document.getElementById("phone");
    let phone = input.value.replace(/\D/g, "");
  
    if (phone.length > 11) phone = phone.slice(0, 11);
  
    if (phone.length <= 10) {
      input.value = phone.replace(/(\d{2})(\d{4})(\d{0,4})/, "($1) $2-$3");
    } else {
      input.value = phone.replace(/(\d{2})(\d{5})(\d{0,4})/, "($1) $2-$3");
    }
  }
  

  document.addEventListener("DOMContentLoaded", function () {
    const scrollSections = document.querySelectorAll(".scroll-section");
  
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    });
  
    scrollSections.forEach(section => {
      observer.observe(section);
    });
  });
  