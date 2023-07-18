<?php include 'header.php' ;?>

<?php
    if(isset($_POST['submit'])){
        $errors = [];
        $id = $_POST['id'];
        $req = $bdd->prepare("SELECT id FROM employees WHERE id=:id");
        $req->bindParam(':id', $id, PDO::PARAM_STR);
        // $req->execute(array(
        //     'id' => $id
        // ));
        $req->execute();

        if($req->rowCount() > 0){
            $req->fetch();
            $delete = $bdd->prepare("DELETE FROM employees WHERE id=:id");
            $delete->execute(array(
                'id' => $id
            ));
        }else{
            $errors[] = "L'employé n'a pas pu être supprimé.";
        }
    }
?>

<div class="container">
        <div class="row justify-content-center">
            <div class="col-6 mt-5 alert alert-primary">
                <h2 class="mb-4">Suppression d'un employé</h2>
                <hr>

                <?php
                    if(isset($errors) && !empty($errors)): 
                ?>
                <div class="text-danger mb-2">
                    <i class="bi bi-exclamation-circle"></i>
                    <?= implode("", $errors);?>
                </div>
                <?php elseif(isset($errors) && empty($errors)): ?>
                <div class="text-success mb-2">
                    <i class="bi bi-check-circle"></i>
                    <?php echo "L'employé a été supprimé avec succès."?>
                </div>
                <?php endif ?>

                <form action="" method="post">
                    <div class="row justify-content-center">
                        <div class="col-8 form-group mt-3">
                            <input type="number" name="id" class="form-control" placeholder="Id de l'employé">
                        </div>
                        <div class="col-2 form-group mt-3 text-start">
                            <button type="submit" name="submit" class="btn btn-primary">
                                <i class="bi bi-trash3"></i>
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>


<?php include 'footer.php' ;?>