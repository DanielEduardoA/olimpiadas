function exibir(conteudo) {
    var mascotes = document.getElementById('conteudo_mascotes');
    var pText;
    var p = document.createElement('p');
    var h3 = document.createElement('h3');
    var h3Text;
	var iframe = document.createElement("iframe");
	
    //Informamos as imagens a serem exibidas pela galeria
    switch(conteudo) {
        case "01":
            while(mascotes.firstChild) {
                mascotes.removeChild(mascotes.firstChild);
            }
            h3Text = document.createTextNode('Miratowa');
            h3.appendChild(h3Text);
            mascotes.appendChild(h3);
            pText = document.createTextNode('O mascote das Olimpíadas de Tóquio Miraitowa segue a cartela de cores e formas do emblema. Seu nome é formado pelas palavras japonesas Mirai (futuro) e Towa (eternidade), que representa o desejo de um futuro cheio de esperança nos corações de todas as pessoas do mundo');
            p.appendChild(pText);
            mascotes.appendChild(p);
			iframe.setAttribute("src", "https://www.youtube.com/embed/ixE1a6_l7e4");
			iframe.setAttribute("width", 500);
			iframe.setAttribute("height", 280);
			mascotes.appendChild(iframe);
			
            break;
        case "02":
            while(mascotes.firstChild) {
                mascotes.removeChild(mascotes.firstChild);
            }
            h3Text = document.createTextNode('Someity');
            h3.appendChild(h3Text);
            mascotes.appendChild(h3);
            pText = document.createTextNode('Já a mascote das Paralimpíadas de Tóquio é Someity, criatura inspirada nas tradicionais flores de cerejeira do Japão e que tem um incrível poder mental e força física, simbolizando a superação de obstáculos dos paratletas. Seu nome é baseado na junção de Someiyoshino (espécie de flor de cerejeira) com o termo “so might”.');
            p.appendChild(pText);
            mascotes.appendChild(p);
			
			iframe.setAttribute("src", "https://www.youtube.com/embed/bzdxwj4422Q");
			iframe.setAttribute("width", 500);
			iframe.setAttribute("height", 280);
			mascotes.appendChild(iframe);
            break;
    }
}