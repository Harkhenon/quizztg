import React from 'react';
import { List } from 'semantic-ui-react';

function Rules() {
  return (
    <aside>
      Bienvenue sur l&apos;examen du TG!
      <br />
      Voici quelques règles et recommandations :
      <br />
      <List ordered inverted>
        <List.Item>
          Tricher est inutile et contre productif, ceci est un jeu, et tricher est
          le meilleur moyen de louper ton véritable examen en centre de tri.
          <br />
          A toi de voir ce que tu veux, l&apos;ami.
        </List.Item>
        <List.Item>
          L&apos;examen se compose comme suit :
          <br />
          Une série de 200 questions (un tri de 200 lettres) sur 10 minutes
        </List.Item>
        <List.Item>
          La bonne nouvelle, c&apos;est que cet examen en ligne est bien plus difficile
          que l&apos;examen de tri classique en centre courrier. Car les 200 questions
          sont toutes différentes, tandis qu&apos;un examen en centre peut comporter
          plusieurs lettres pour la même rue.
          <br />
          Exception faite pour le &quot;jeu de tri&quot; en centre, un jeu de cartes
          à trier qui sont toutes différentes et qui ressemblent à ce jeu.
        </List.Item>
      </List>
    </aside>
  );
}

export default Rules;
