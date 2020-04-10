function exibir(conteudo) {
    //Informamos o ID da tag IMG que ir� exibir a galeria
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
			
            pText = document.createTextNode('O Surf � um esporte individual, radical, praticado no mar. O desafio � se manter o maior tempo poss�vel em p� sob uma prancha, deslizando sob as ondas e realizando manobras radicais, com v�rios n�veis de dificuldade.');
            p1.appendChild(pText);
            modalidades.appendChild(p1);
			
            pText = document.createTextNode('Alguns historiadores defendem a id�ia de que o Surf surgiu nas Ilhas Polin�sias quando os nativos saiam para pescar e, para voltar mais r�pido � terra firme, deslizavam com seus barcos atrav�s das ondas.');
            p2.appendChild(pText);
            modalidades.appendChild(p2);
			
            pText = document.createTextNode('Posteriormente, os reis das ilhas do Hawai passaram a praticar este esporte com pranchas feitas de madeira. Foi no Hawai que o surfe tornou-se uma cultura.');
            p3.appendChild(pText);
            modalidades.appendChild(p3);
			
            pText = document.createTextNode('A divulga��o deste esporte se deve a um campe�o ol�mpico de nata��o do Hawai chamado Duke Kahanamoku. Aproximadamente no ano de 1920 come�aram a surgir os primeiros campeonatos nos Estados Unidos, na Calif�rnia.');
            p4.appendChild(pText);
            modalidades.appendChild(p4);
			
            pText = document.createTextNode('As linhas do surfe s�o:');
			p5.appendChild(pText);
            modalidades.appendChild(p5);
			
			textLi = document.createTextNode('Cl�ssica - d� mais import�ncia ao estilo em detrimento � for�a.');
			item1.appendChild(textLi);
			list1.appendChild(item1);
			
			textLi = document.createTextNode('Moderna � d� mais import�ncia � for�a e a radicalidade do que o estilo.');
			item2.appendChild(textLi);
			list1.appendChild(item2);
			
            modalidades.appendChild(list1);
			
			pText = document.createTextNode('As manobras mais radicais do surfe s�o:');
			p6.appendChild(pText);
            modalidades.appendChild(p6);
			
			textLi = document.createTextNode('Tubo � o surfista fica envolto pela onda.');
			item3.appendChild(textLi);
			list2.appendChild(item3);
			
			textLi = document.createTextNode('A�reo � o surfista usa a onda como rampa, al�ando v�o e �pousando� novamente sob a �gua');
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
			
            pText = document.createTextNode('Muitos creditam que a primeira parede de escalada da hist�ria foi montada nos EUA em 1939 na cidade de Seattle. Na verdade a estrutura erguida neste ano n�o foi criada para este princ�pio, mas convertida a isso ao longo do tempo.');
            p1.appendChild(pText);
            modalidades.appendChild(p1);
            pText = document.createTextNode('Portanto, historicamente falando, a primeira estrutura de parede de artificial para a escalada no mundo, foi constru�da em 1960 na The Ullswater School in Penrith, na Inglaterra. A parede foi constru�da no ent�o novo gin�sio de escalada e usava tijolos e pedras para as agarras de p� e m�o.');
            p2.appendChild(pText);
            modalidades.appendChild(p2);
			
            pText = document.createTextNode('A primeira academia de escalada da hist�ria foi inaugurada na pr�pria Inglaterra, na cidade de Sheffield em 1975. No Brasil, a primeira academia de escalada, Academia 90 graus, apareceu somente em 1994 na cidade de S�o Paulo');
            p3.appendChild(pText);
            modalidades.appendChild(p3);
			
            pText = document.createTextNode('Uma das maiores inven��es das paredes de escalada, as agarras de resina, somente foram desenvolvidas em 1983 pela empresa francesa Entre Prises. Pouco tempo depois a empresa norte-americana Metolius tamb�m come�ou a produzir agarras de escalada de maneira mais industrial.');
            p4.appendChild(pText);
            modalidades.appendChild(p4);
			
            pText = document.createTextNode('As primeiras competi��es em locais fechados e em paredes de escalada aconteceram na extinta Uni�o Sovi�tica, no in�cio da d�cada de 1980');
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
            pText = document.createTextNode('� um esporte que consiste em, realizar manobras deslizando sobre o solo equilibrando-se sobre o skate. O skate � uma prancha (shape) que possui dois eixos (trucks), rolamentos e quatro pequenas rodas.');
            p1.appendChild(pText);
            modalidades.appendChild(p1);
			
            pText = document.createTextNode('O skate surgiu na Calif�rnia, Estados Unidos, nos anos 60. Foi inventado por alguns surfistas, como uma brincadeira para um dia no qual n�o havia ondas no mar.');
            p2.appendChild(pText);
            modalidades.appendChild(p2);
			
            pText = document.createTextNode('J� em 1965 foram fabricados os primeiros skates e realizados os primeiros campeonatos.');
            p3.appendChild(pText);
            modalidades.appendChild(p3);
			
            pText = document.createTextNode('Mas o esporte s� ganhou o mundo nos anos 90, quando o norte-americano Tony Hawk realizou uma revolu��o com seus a�reos e flips.');
            p4.appendChild(pText);
            modalidades.appendChild(p4);
			
            pText = document.createTextNode('Existem as seguintes modalidades:');
            p5.appendChild(pText);
            modalidades.appendChild(p5);
			
			textLi = document.createTextNode('Freestyle � manobras feitas em sequ�ncia, no ch�o.');
			item1.appendChild(textLi);
			list1.appendChild(item1);
			
			textLi = document.createTextNode('Down Hill � descida de ladeiras na maior velocidade poss�vel.');
			item2.appendChild(textLi);
			list1.appendChild(item2);
			
			textLi = document.createTextNode('Vertical - � praticada em pista, e pode ser subdividida em outras modalidades, variando sempre as condi��es da pista. As manobras podem ser a�reas ou deslizando pela borda met�lica da pista.');
			item3.appendChild(textLi);
			list1.appendChild(item3);
			
			textLi = document.createTextNode('Street Style � na modalidade mais praticada em todo o mundo, os bancos, corrim�es, escadas das ruas das cidades s�o utilizadas como obst�culos para o skate.');
			item4.appendChild(textLi);
			list1.appendChild(item4);
			
			textLi = document.createTextNode('Mini-rampas � pr�ticado em rampa que mistura os estilo Street e Vertical.');
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
            pText = document.createTextNode('N�o se sabe ao certo quando o esporte surgiu, mas foi  no ano 1744 que existe alguma refer�ncia concreta, no Reino Unido, sendo que foi uma evolu��o do jogo de rounders que j� era jogado nessa regi�o, e que acabou por ser levado e depois popularizado por imigrantes ingleses na Am�rica do Norte.');
            p1.appendChild(pText);
            modalidades.appendChild(p1);
			
            pText = document.createTextNode('O objetivo principal do baseball, � acertar a bola com um taco, o mais longe poss�vel e corretamente, dentro dos limites do campo, e correr pelas quatro bases que est�o no campo at� chegar � ultima onde � marcado um ponto.');
            p2.appendChild(pText);
            modalidades.appendChild(p2);
			
            pText = document.createTextNode('Ao contr�rio de a maioria dos desportos em que a dura��o do jogo � fixa por um tempo pr�-determinado, no Baseball, para o jogo acabar, pelo menos uma equipe tem que fazer 27 elimina��es, salvo raras exce��es.');
            p3.appendChild(pText);
            modalidades.appendChild(p3);
			
            pText = document.createTextNode('Cada entrada (ou inning) acaba quando 3 jogadores s�o eliminados, por isso o jogo � composto por 9 innings. Se no final dessas 9 innings as equipes continuarem empatadas, a equipe que conseguir se adiantar primeiro nas pr�ximas innings ganha');
            p4.appendChild(pText);
            modalidades.appendChild(p4);
			
            pText = document.createTextNode('O campo de Beisebol � em forma de quadrado, sendo que a sua posi��o faz parecer que � um losango (da� ser chamado de diamante)');
            p5.appendChild(pText);
            modalidades.appendChild(p5);
			
            pText = document.createTextNode('Este campo � dividido em duas partes principais');
            p6.appendChild(pText);
            modalidades.appendChild(p6);
			
			textLi = document.createTextNode('Infield - tem o solo em terra e � em forma de quadrado (o diamante), tendo ele quatro bases, as quais tem de ser alcan�adas pelo jogador que esta a atacar e cada uma tem um jogador a defende-las.');
			item1.appendChild(textLi);
			list1.appendChild(item1);
			
			textLi = document.createTextNode('Outfield - por sua vez tem o solo grama, sendo ele a parte ap�s o infield at� ao muro e � protegido por mais 3 jogadores, os quais est�o sempre atentos aos lan�amentos que s�o longos e altos (flyballs)');
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
            pText = document.createTextNode('Come�ou a se tornar profissional no final da d�cada de 80, com algumas pequenas competi��es.');
            p1.appendChild(pText);
            modalidades.appendChild(p1);
			
            pText = document.createTextNode('O primeiro evento teste de 3�3 organizado pela Fiba aconteceu em 2007, durante os Asian Indoor Games, em Macau, na China');
            p2.appendChild(pText);
            modalidades.appendChild(p2);
			
            pText = document.createTextNode('A estreia internacional ocorreu durante os Jogos Ol�mpicos da Juventude, em 2010.');
            p3.appendChild(pText);
            modalidades.appendChild(p3);
			
            pText = document.createTextNode('As partidas s�o disputadas em meia-quadra com uma cesta. A quadra tem dimens�es de 15�11 metros.');
            p4.appendChild(pText);
            modalidades.appendChild(p4);
			
            pText = document.createTextNode('Os arremessos dentro do arco valem um ponto enquanto que arremessos fora do arco valem dois pontos.');
            p5.appendChild(pText);
            modalidades.appendChild(p5);
			
            pText = document.createTextNode('As partidas t�m 10 minutos de dura��o (se empatar, prorroga��o).');
            p6.appendChild(pText);
            modalidades.appendChild(p6);
			
            pText = document.createTextNode('Vence quem fizer 21 pontos primeiro ou tiver a maior pontua��o ap�s o tempo limite. Na prorroga��o, vence quem fizer dois pontos primeiro');
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
			
            pText = document.createTextNode('O Free Style existe desde a d�cada de 70 e foi inventado nos Estados Unidos. ');
            p1.appendChild(pText);
            modalidades.appendChild(p1);
			
            pText = document.createTextNode('Suas primeiras manobras foram inventadas por pilotos mundialmente famosos como Bob Haro, Ron Wilkerson e Michael Domingues');
            p2.appendChild(pText);
            modalidades.appendChild(p2);
			
            pText = document.createTextNode('No BMX Free Style encontramos 5 modalidades s�o elas:');
            p3.appendChild(pText);
            modalidades.appendChild(p3);
			
			textLi = document.createTextNode('Dirt jump � � praticado em rampas de terra, com alturas e dist�ncias variadas, podem ser rampas �nicas, doubles, ou sequenciais chamadas de trails, ou ate rampas de madeira tipo mesa.');
			item1.appendChild(textLi);
			list1.appendChild(item1);
			
			textLi = document.createTextNode(' Vertical - � executado em uma rampa em forma de �U�, denominada Half Pipe, com manobras nas laterais (bordas) e nos chamados a�reos (v�os para fora da rampa) onde os atletas buscam executar manobras de alto grau de dificuldade o mais alto poss�vel no dois lados da rampa.');
			item2.appendChild(textLi);
			list1.appendChild(item2);
			
			textLi = document.createTextNode('Mini Ramp - tem uma altura e tamanho inferiores ao Vertical, realizam-se manobras de bordas, associadas a manobras de salto e a�reos geralmente em rampas de madeira.');
			item3.appendChild(textLi);
			list1.appendChild(item3);
			
			textLi = document.createTextNode('Street - � praticado nas ruas como o pr�prio nome j� diz ou em pistas que simulem ruas que tenham corrim�es, escadas e rampas, dos mais variados tipos como spines, fun box, 45�, quarters, savanas entre outros.');
			item4.appendChild(textLi);
			list1.appendChild(item4);
			
			textLi = document.createTextNode('Flatland - � uma apresenta��o no solo sem rampas ou pulos, considerado o mais livres dos estilos onde cada piloto faz sua session buscando dificuldade e equil�brio aliados a criatividade.');
			item5.appendChild(textLi);
			list1.appendChild(item5);
			
            modalidades.appendChild(list1);
            
            break;
    }
}