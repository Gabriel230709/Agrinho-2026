// Aguarda o documento carregar completamente
document.addEventListener('DOMContentLoaded', () => {
    console.log("Sistema AgroSustentável inicializado com sucesso!");
    
    // 1. Saudação Automática conforme o horário
    const saudacaoElemento = document.querySelector('.hero-section p');
    const hora = new Date().getHours();
    let textoSaudacao = "";

    if (hora < 12) textoSaudacao = "Bom dia, produtor! ";
    else if (hora < 18) textoSaudacao = "Boa tarde, produtor! ";
    else textoSaudacao = "Boa noite, produtor! ";

    // Adiciona a saudação ao texto existente
    saudacaoElemento.innerText = textoSaudacao + saudacaoElemento.innerText;
});

/**
 * Função para calcular a necessidade de fertilizante
 * Baseado em uma média fictícia de 300kg por hectare (apenas para exemplo)
 */
function calcularInsumos() {
    const area = prompt("Digite o tamanho da área de plantio em hectares (ha):");
    
    if (area !== null && area > 0) {
        const taxaMedia = 300; // 300kg por hectare
        const total = area * taxaMedia;
        
        alert(`Para uma área de ${area} hectares, você precisará de aproximadamente ${total}kg de fertilizante.\n\nLembre-se: O equilíbrio evita a contaminação do solo!`);
    } else {
        alert("Por favor, insira um valor válido.");
    }
}

// Conectar a função ao botão da Calculadora no HTML
// Se o seu botão de "Acessar" da calculadora tiver um ID ou classe específica:
const btnCalculadora = document.querySelectorAll('.btn-outline-success')[0];
if (btnCalculadora) {
    btnCalculadora.addEventListener('click', calcularInsumos);
}
<script src="script.js"></script>
</body>