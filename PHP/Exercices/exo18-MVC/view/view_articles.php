    <br><br><br>

    <h2>Formulaire</h2>
    <form action="" method="post">
        <label for="nom_article">Nom de l'article: </label>
        <br>
        <input type="text" name="nom_article">
        <br>
        <label for="contenu_article">Contenu de l'article: </label>
        <br>
        <input type="text" name="contenu_article">
        <br>
        <div class="inp"><input type="submit" name="submit" value="Entrer" id="submit"></div>
    </form>

    <hr class="a">
    
    <h2>Données</h2>
    <table>
        <tr>
            <th>Nom</th>
            <th>Contenu</th>
        </tr>

        <?php foreach($dataName as $d): ?>
        <tr>
            <td><?=$d['nom_article'];?></td>
            <td><?=$d['contenu_article'];?></td>
        </tr>
        <?php endforeach; ?>
        
        