<?php 
    include 'header.php';
?>

<div class="container">
        <div class="row justify-content-center">
            <div class="col-6 mt-5 alert alert-primary">
                <h2 class="mb-4">Rechercher un employé</h2>
                <hr>

                <form action="" method="post">
                    <div class="row justify-content-center">
                        <div class="col-8 form-group mt-3">
                            <input type="text" name="nom" class="form-control">
                        </div>
                        <div class="col-2 form-group mt-3 flex-start">
                            <button type="submit" name="submit" class="btn btn-primary">
                                <i class="bi bi-search"></i>
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>


    <?php
    if(isset($_POST['submit'])){
        $error;
        $nom = $_POST['nom'];
        $req = $bdd->prepare("SELECT * FROM employees WHERE nom LIKE :nom");
        $req->execute(array(
            'nom' => "%".$nom."%"
        ));
        $results = $req->fetchAll();

        if($req->rowCount() > 0){
        ?>
            <div class="container">
            <div class="row justify-content-center">
                <div class="col-7">
                    <table class="table table-striped mt-4 text-center">
                        <thead class="bg-primary text-white">
                            <tr>
                                <th>Nom</th>
                                <th>Poste</th>
                                <th>Salaire</th>
                            </tr>
                        </thead>
                        <tbody>
            
            <?php
            foreach($results as $result):
            ?>
                            <tr>
                                <td><?=$result['nom'];?></td>
                                <td><?=$result['poste'];?></td>
                                <td><?=$result['salaire'];?></td>
                            </tr>
            <?php endforeach ;?>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>

        <?php
        }else{
            $error = "Aucun employé n'a été trouvé avec ce nom.";
        }
    }
?>

<?php
    if(isset($error) && !empty($error)):
?>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-6">
                <p class="text-center">
                    <?php echo $error; ?>
                </p>
            </div>
        </div>
    </div>
<?php endif ;?>

<?php include 'footer.php' ;?>