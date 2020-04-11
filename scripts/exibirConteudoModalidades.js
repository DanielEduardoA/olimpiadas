function exibir(conteudo) {
    var modalidades = document.getElementById('conteudo_modalidades');
    var pText;
    var h3 = document.createElement('h3');
    var p1 = document.createElement('p');
    var p2 = document.createElement('p');
    var p3 = document.createElement('p');
    var p4 = document.createElement('p');
    var p5 = document.createElement('p');
    var p6 = document.createElement('p');
    var p7 = document.createElement('p');
	var list1 = document.createElement('ul');
	var item1 = document.createElement('li');
	var item2 = document.createElement('li');
	var list2 = document.createElement('ul');
	var item3 = document.createElement('li');
	var item4 = document.createElement('li');
	var item5 = document.createElement('li');
	var item6 = document.createElement('li');
	var textLi;
	var texth3;
    //Informamos as imagens a serem exibidas pela galeria
    switch(conteudo) {
        case "01":
            while(modalidades.firstChild) {
                modalidades.removeChild(modalidades.firstChild);
            }
			texth3  = document.createTextNode('Surf');
			h3.appendChild(texth3);
			modalidades.appendChild(h3);
            modalidades.appendChild(h3);
			
            pText = document.createTextNode('O Surf é um esporte individual, radical, praticado no mar. O desafio é se manter o maior tempo possível em pé sob uma prancha, deslizando sob as ondas e realizando manobras radicais, com vários níveis de dificuldade.');
            p1.appendChild(pText);
            modalidades.appendChild(p1);
			
            pText = document.createTextNode('Alguns historiadores defendem a idéia de que o Surf surgiu nas Ilhas Polinésias quando os nativos saiam para pescar e, para voltar mais rápido à terra firme, deslizavam com seus barcos através das ondas.');
            p2.appendChild(pText);
            modalidades.appendChild(p2);
			
            pText = document.createTextNode('Posteriormente, os reis das ilhas do Hawai passaram a praticar este esporte com pranchas feitas de madeira. Foi no Hawai que o surfe tornou-se uma cultura.');
            p3.appendChild(pText);
            modalidades.appendChild(p3);
			
            pText = document.createTextNode('A divulgação deste esporte se deve a um campeão olímpico de natação do Hawai chamado Duke Kahanamoku. Aproximadamente no ano de 1920 começaram a surgir os primeiros campeonatos nos Estados Unidos, na Califórnia.');
            p4.appendChild(pText);
            modalidades.appendChild(p4);
			
            pText = document.createTextNode('As linhas do surfe são:');
			p5.appendChild(pText);
            modalidades.appendChild(p5);
			
			textLi = document.createTextNode('Clássica - dá mais importância ao estilo em detrimento à força.');
			item1.appendChild(textLi);
			list1.appendChild(item1);
			
			textLi = document.createTextNode('Moderna - dá mais importância à força e a radicalidade do que o estilo.');
			item2.appendChild(textLi);
			list1.appendChild(item2);
			
            modalidades.appendChild(list1);
			
			pText = document.createTextNode('As manobras mais radicais do surfe são:');
			p6.appendChild(pText);
            modalidades.appendChild(p6);
			
			textLi = document.createTextNode('Tubo - o surfista fica envolto pela onda.');
			item3.appendChild(textLi);
			list2.appendChild(item3);
			
			textLi = document.createTextNode('Aéreo - o surfista usa a onda como rampa, alçando vôo e "pousando" novamente sob a água');
			item4.appendChild(textLi);
			list2.appendChild(item4);
			
            modalidades.appendChild(list2);
            break;
        case "02":
            while(modalidades.firstChild) {
                modalidades.removeChild(modalidades.firstChild);
            }
			texth3  = document.createTextNode('Escalada');
			h3.appendChild(texth3);
			modalidades.appendChild(h3);
            modalidades.appendChild(h3);
			
            pText = document.createTextNode('Muitos creditam que a primeira parede de escalada da história foi montada nos EUA em 1939 na cidade de Seattle. Na verdade a estrutura erguida neste ano não foi criada para este princípio, mas convertida a isso ao longo do tempo.');
            p1.appendChild(pText);
            modalidades.appendChild(p1);
            pText = document.createTextNode('Portanto, historicamente falando, a primeira estrutura de parede de artificial para a escalada no mundo, foi construída em 1960 na The Ullswater School in Penrith, na Inglaterra. A parede foi construída no então novo ginásio de escalada e usava tijolos e pedras para as agarras de pé e mão.');
            p2.appendChild(pText);
            modalidades.appendChild(p2);
			
            pText = document.createTextNode('A primeira academia de escalada da história foi inaugurada na própria Inglaterra, na cidade de Sheffield em 1975. No Brasil, a primeira academia de escalada, Academia 90 graus, apareceu somente em 1994 na cidade de São Paulo');
            p3.appendChild(pText);
            modalidades.appendChild(p3);
			
            pText = document.createTextNode('Uma das maiores invenções das paredes de escalada, as agarras de resina, somente foram desenvolvidas em 1983 pela empresa francesa Entre Prises. Pouco tempo depois a empresa norte-americana Metolius também começou a produzir agarras de escalada de maneira mais industrial.');
            p4.appendChild(pText);
            modalidades.appendChild(p4);
			
            pText = document.createTextNode('As primeiras competições em locais fechados e em paredes de escalada aconteceram na extinta União Soviética, no início da década de 1980');
            p5.appendChild(pText);
            modalidades.appendChild(p5);
            break;
        case "03":
            while(modalidades.firstChild) {
                modalidades.removeChild(modalidades.firstChild);
            }
			texth3  = document.createTextNode('Skate');
			h3.appendChild(texth3);
			modalidades.appendChild(h3);
            modalidades.appendChild(h3);
            pText = document.createTextNode('É um esporte que consiste em, realizar manobras deslizando sobre o solo equilibrando-se sobre o skate. O skate é uma prancha (shape) que possui dois eixos (trucks), rolamentos e quatro pequenas rodas.');
            p1.appendChild(pText);
            modalidades.appendChild(p1);
			
            pText = document.createTextNode('O skate surgiu na Califórnia, Estados Unidos, nos anos 60. Foi inventado por alguns surfistas, como uma brincadeira para um dia no qual não havia ondas no mar.');
            p2.appendChild(pText);
            modalidades.appendChild(p2);
			
            pText = document.createTextNode('Já em 1965 foram fabricados os primeiros skates e realizados os primeiros campeonatos.');
            p3.appendChild(pText);
            modalidades.appendChild(p3);
			
            pText = document.createTextNode('Mas o esporte só ganhou o mundo nos anos 90, quando o norte-americano Tony Hawk realizou uma revolução com seus aéreos e flips.');
            p4.appendChild(pText);
            modalidades.appendChild(p4);
			
            pText = document.createTextNode('Existem as seguintes modalidades:');
            p5.appendChild(pText);
            modalidades.appendChild(p5);
			
			textLi = document.createTextNode('Freestyle - manobras feitas em sequência, no chão.');
			item1.appendChild(textLi);
			list1.appendChild(item1);
			
			textLi = document.createTextNode('Down Hill - descida de ladeiras na maior velocidade possível.');
			item2.appendChild(textLi);
			list1.appendChild(item2);
			
			textLi = document.createTextNode('Vertical - é praticada em pista, e pode ser subdividida em outras modalidades, variando sempre as condições da pista. As manobras podem ser aéreas ou deslizando pela borda metálica da pista.');
			item3.appendChild(textLi);
			list1.appendChild(item3);
			
			textLi = document.createTextNode('Street Style - na modalidade mais praticada em todo o mundo, os bancos, corrimões, escadas das ruas das cidades são utilizadas como obstáculos para o skate.');
			item4.appendChild(textLi);
			list1.appendChild(item4);
			
			textLi = document.createTextNode('Mini-rampas - práticado em rampa que mistura os estilo Street e Vertical.');
			item5.appendChild(textLi);
			list1.appendChild(item5);
			
            modalidades.appendChild(list1);
            break;
        case "04":
            while(modalidades.firstChild) {
                modalidades.removeChild(modalidades.firstChild);
            }
			texth3  = document.createTextNode('Baseball');
			h3.appendChild(texth3);
			modalidades.appendChild(h3);
            modalidades.appendChild(h3);
            pText = document.createTextNode('Não se sabe ao certo quando o esporte surgiu, mas foi  no ano 1744 que existe alguma referência concreta, no Reino Unido, sendo que foi uma evolução do jogo de rounders que já era jogado nessa região, e que acabou por ser levado e depois popularizado por imigrantes ingleses na América do Norte.');
            p1.appendChild(pText);
            modalidades.appendChild(p1);
			
            pText = document.createTextNode('O objetivo principal do baseball, é acertar a bola com um taco, o mais longe possível e corretamente, dentro dos limites do campo, e correr pelas quatro bases que estão no campo até chegar à ultima onde é marcado um ponto.');
            p2.appendChild(pText);
            modalidades.appendChild(p2);
			
            pText = document.createTextNode('Ao contrário de a maioria dos desportos em que a duraçãoo do jogo é fixa por um tempo pré-determinado, no Baseball, para o jogo acabar, pelo menos uma equipe tem que fazer 27 eliminações, salvo raras exceções.');
            p3.appendChild(pText);
            modalidades.appendChild(p3);
			
            pText = document.createTextNode('Cada entrada (ou inning) acaba quando 3 jogadores são eliminados, por isso o jogo é composto por 9 innings. Se no final dessas 9 innings as equipes continuarem empatadas, a equipe que conseguir se adiantar primeiro nas próximas innings ganha');
            p4.appendChild(pText);
            modalidades.appendChild(p4);
			
            pText = document.createTextNode('O campo de Beisebol é em forma de quadrado, sendo que a sua posição faz parecer que é um losango (daí ser chamado de diamante)');
            p5.appendChild(pText);
            modalidades.appendChild(p5);
			
            pText = document.createTextNode('Este campo é dividido em duas partes principais');
            p6.appendChild(pText);
            modalidades.appendChild(p6);
			
			textLi = document.createTextNode('Infield - tem o solo em terra e é em forma de quadrado (o diamante), tendo ele quatro bases, as quais tem de ser alcançadas pelo jogador que esta a atacar e cada uma tem um jogador a defende-las.');
			item1.appendChild(textLi);
			list1.appendChild(item1);
			
			textLi = document.createTextNode('Outfield - por sua vez tem o solo grama, sendo ele a parte após o infield até ao muro e é protegido por mais 3 jogadores, os quais estão sempre atentos aos lançamentos que são longos e altos (flyballs)');
			item2.appendChild(textLi);
			list1.appendChild(item2);
			
			modalidades.appendChild(list1);

            break;
        case "05":
            while(modalidades.firstChild) {
                modalidades.removeChild(modalidades.firstChild);
            }
			texth3  = document.createTextNode('Basquete 3x3');
			h3.appendChild(texth3);
			modalidades.appendChild(h3);
            modalidades.appendChild(h3);
            pText = document.createTextNode('Começou a se tornar profissional no final da década de 80, com algumas pequenas competições.');
            p1.appendChild(pText);
            modalidades.appendChild(p1);
			
            pText = document.createTextNode('O primeiro evento teste de 3x3 organizado pela Fiba aconteceu em 2007, durante os Asian Indoor Games, em Macau, na China');
            p2.appendChild(pText);
            modalidades.appendChild(p2);
			
            pText = document.createTextNode('A estreia internacional ocorreu durante os Jogos Olímpicos da Juventude, em 2010.');
            p3.appendChild(pText);
            modalidades.appendChild(p3);
			
            pText = document.createTextNode('As partidas são disputadas em meia-quadra com uma cesta. A quadra tem dimensções de 15x11 metros.');
            p4.appendChild(pText);
            modalidades.appendChild(p4);
			
            pText = document.createTextNode('Os arremessos dentro do arco valem um ponto enquanto que arremessos fora do arco valem dois pontos.');
            p5.appendChild(pText);
            modalidades.appendChild(p5);
			
            pText = document.createTextNode('As partidas têm 10 minutos de duração (se empatar, prorrogação).');
            p6.appendChild(pText);
            modalidades.appendChild(p6);
			
            pText = document.createTextNode('Vence quem fizer 21 pontos primeiro ou tiver a maior pontuação após o tempo limite. Na prorrogação, vence quem fizer dois pontos primeiro');
            p7.appendChild(pText);
            modalidades.appendChild(p7);
            break;
        case "06":

            while(modalidades.firstChild) {
                modalidades.removeChild(modalidades.firstChild);
            }
			texth3  = document.createTextNode('BMX Freestyle');
			h3.appendChild(texth3);
			modalidades.appendChild(h3);
            modalidades.appendChild(h3);
			
            pText = document.createTextNode('O Free Style existe desde a década de 70 e foi inventado nos Estados Unidos. ');
            p1.appendChild(pText);
            modalidades.appendChild(p1);
			
            pText = document.createTextNode('Suas primeiras manobras foram inventadas por pilotos mundialmente famosos como Bob Haro, Ron Wilkerson e Michael Domingues');
            p2.appendChild(pText);
            modalidades.appendChild(p2);
			
            pText = document.createTextNode('No BMX Free Style encontramos 5 modalidades são elas:');
            p3.appendChild(pText);
            modalidades.appendChild(p3);
			
			textLi = document.createTextNode('Dirt jump - é praticado em rampas de terra, com alturas e distâncias variadas, podem ser rampas únicas, doubles, ou sequenciais chamadas de trails, ou ate rampas de madeira tipo mesa.');
			item1.appendChild(textLi);
			list1.appendChild(item1);
			
			textLi = document.createTextNode(' Vertical - é executado em uma rampa em forma de "U", denominada Half Pipe, com manobras nas laterais (bordas) e nos chamados aéreos (vôos para fora da rampa) onde os atletas buscam executar manobras de alto grau de dificuldade o mais alto possível no dois lados da rampa.');
			item2.appendChild(textLi);
			list1.appendChild(item2);
			
			textLi = document.createTextNode('Mini Ramp - tem uma altura e tamanho inferiores ao Vertical, realizam-se manobras de bordas, associadas a manobras de salto e aéreos geralmente em rampas de madeira.');
			item3.appendChild(textLi);
			list1.appendChild(item3);
			
			textLi = document.createTextNode('Street - é praticado nas ruas como o próprio nome já diz ou em pistas que simulem ruas que tenham corrimões, escadas e rampas, dos mais variados tipos como spines, fun box, 45°, quarters, savanas entre outros.');
			item4.appendChild(textLi);
			list1.appendChild(item4);
			
			textLi = document.createTextNode('Flatland - é uma apresentação no solo sem rampas ou pulos, considerado o mais livres dos estilos onde cada piloto faz sua session buscando dificuldade e equilíbrio aliados a criatividade.');
			item5.appendChild(textLi);
			list1.appendChild(item5);
			
            modalidades.appendChild(list1);
            
            break;
    }
}