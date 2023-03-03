# Assignment in Basic Frontend Development
## Innehåll

- [Information](#information)
- [Screenshots](#screenshots)
- [Process](#process)
- [Utvärdering](#utvärdering)

## Information

#### Här kan du testa hemsidan: [Portfolio-School-Project](https://p1otrboi.github.io/Portfolio-School-Project/index.html)

Den här hemsidan är byggd som första inlämningsuppgiften i kursen Grundläggande Frontendutveckling, efter dessa intruktioner:
- Vid arbetet med uppgiften skall du skapa en webbsite, med två sidor. Sida ett ska fungera som en "landing-page" och även innehålla ditt CV då du söker anställning. Sida två ger dig möjlighet att visa kunskap av utveckling av ett eller flera spel i JavaScript. Navigation mellan sidorna skall ske genom en meny.
- Siten ska innehålla minst tre valfria Bootstrap-komponenter
- Bootstrap Modal javascript plugin ska användas för att imitera en inloggningsfunktion (fullständig implementering av inloggning behöver ej göras)
- Efter inloggning ska det angivna användarnamnet presenteras någonstans på sidan

## Screenshots

![screenshot1](https://github.com/p1otrboi/Portfolio-School-Project/blob/master/images/Screenshot_1.png)
![screenshot2](https://github.com/p1otrboi/Portfolio-School-Project/blob/master/images/Screenshot_2.png)
![screenshot3](https://github.com/p1otrboi/Portfolio-School-Project/blob/master/images/Screenshot_3.png)
![screenshot4](https://github.com/p1otrboi/Portfolio-School-Project/blob/master/images/Screenshot_4.png)

## Process

Efter inledande kurser i .NET/C# med fokus på web-api:er och databaser så kändes det rätt tråkigt att börja hålla på med HTML, och de absoluta grunderna i detta lärde jag mig någorlunda för ca 15 år sedan tillsammans med på sin höjd några rader CSS, för att sedan inte röra det sen dess. Efter att vi kom in på JavaScript och nosade på React så blev det lite intressantare då JS kändes ganska enkelt att greppa när man kommer från C# då syntaxen och OOP-elementen är ganska lika.

Jag har inte blivit kompis med Bootstrap ännu då jag hellre vill ha koll på allt och inte klistra in massa boiler-plate, och få massa dold CSS-styling på köpet etc som stör de elementen jag designar själv - så min approach blev att bygga strukturen själv med HTML/CSS/JS, och därefter lägga till 3 Bootstrap-komponenter enligt kraven på uppgiften. De komponenterna jag valde var:
1. Responsiv top-fixed Navbar för mindre enheter - vid full skärm så visas min egna navbar som är fäst till vänster
2. Responsiv grid layout som används på korten i CV-delen
3. Responsiva containers för att rymma Bootstrap-elementen
4. Och enligt uppgiftens krav så användes Bootstrap Modal för att agera som inloggningspopup

För "login"-funktionen så accepteras alla inloggningar med lösenordet **PassW**, och det angivna användarnamnet visas därefter i headern tillsammans med en 'logga-ut'-knapp. För att behålla information om aktiva användare när man navigerar mellan de två sidorna, i saknad av databas, så sparas användarnamn tillsammans med en inloggad=true/false-bool i Local Storage för att även fungera lokalt.

## Utvärdering

Som alltid tidigare så har jag lärt mig absolut mest av att göra uppgifter efter riktlinjer. Det ger mig utrymme att experimentera och prova mig fram, och därigenom springa på många vanliga problem som leder till att man får söka information angående dessa med resultatet att folk pekar en i bättre riktningar. Så från att ha börjat med att tycka det var tråkigt med frontend, så börjar det bli inspirerande och kul då man börjar lära sig hur man kan översätta sina idéer och faktiskt få resultat som liknar dem.
