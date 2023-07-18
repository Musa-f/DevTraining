<?php include "header.php" ;?>

<?php
    if(isset($_POST['submit'])){
        $errors = [];

        $nom = $_POST['nom'];
        $poste = $_POST['poste'];
        $salaire = $_POST['salaire'];

        if(!empty($nom && $poste && $salaire)){
            $insertDatas = $bdd->prepare("INSERT INTO employees(nom, poste, salaire) VALUES (:nom, :poste, :salaire)");
            $insertDatas->execute(array(
                'nom' => $nom,
                'poste' => $poste,
                'salaire' => $salaire
            ));
        }else{
            $errors[] = "Veuillez compléter tous les champs";
        }
    }
?>

    <div class="container">
        <div class="row justify-content-center">
            <div class="col-6 mt-5 alert alert-primary">
                <h2 class="mb-4">Formulaire</h2>
                <hr>

                <?php
                    if(isset($errors) && !empty($errors)): 
                ?>
                <div class="text-danger mb-3">
                    <i class="bi bi-exclamation-circle"></i>
                    <?= implode("", $errors);?>
                </div>
                <?php elseif(isset($errors) && empty($errors)): ?>
                <div class="text-success mb-3">
                    <i class="bi bi-check-circle"></i>
                    <?php echo "L'enregistrement a été mis à jour avec succès."?>
                </div>
                <?php endif ?>

                <form action="" method="post">
                    <div class="form-group">
                        <label for="nom"><i class="bi bi-file-earmark-person"></i> Nom</label>
                        <input type="text" name="nom" class="form-control">
                    </div>
                    <div class="form-group mt-3">
                        <label for="poste">
                            <i class="bi bi-clipboard2-minus-fill"></i> Poste
                        </label>
                        <select class="form-select" name="poste">
                            <option>Serveur</option>
                            <option>Plongeur</option>
                            <option>Cuisiner</option>
                        </select>
                    </div>
                    <div class="form-group mt-3">
                        <label for="salaire"><i class="bi bi-currency-euro"></i> Salaire</label>
                        <input type="number" name="salaire" class="form-control">
                    </div>
                    <div class="form-group mt-3 text-end">
                        <button type="submit" name="submit" class="btn btn-primary">
                            <i class="bi bi-envelope-open"></i>
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>

<?php include "footer.php" ;?>