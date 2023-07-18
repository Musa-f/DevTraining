<?php include "header.php"?>

        <div class="container">
            <div class="row justify-content-center">
                <div class="col-7">
                <table class="table table-striped mt-4 text-center">
                <thead class="bg-primary text-white">
                    <tr>
                        <th>Id</th>
                        <th>Nom</th>
                        <th>Poste</th>
                        <th>Salaire</th>
                    </tr>
                </thead>
                <tbody>
                    <?php
                        $datas = $bdd->prepare("SELECT * FROM employees");
                        $datas->execute();
                        foreach($datas as $data):
                    ?>
                    <tr>
                        <td><?=$data['id'];?></td>
                        <td><?=$data['nom'];?></td>
                        <td><?=$data['poste'];?></td>
                        <td><?=$data['salaire'];?></td>
                    </tr>
                    <?php
                        endforeach;
                    ?>
                </tbody>
            </table>
                </div>
            </div>
        </div>

<?php include "footer.php"; ?>

