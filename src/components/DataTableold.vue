<template>
    <div class="container my-4">
        <div>
            <table class="table">
                <thead>
                    <tr>
                    <th scope="col">Choice</th>
                    <th scope="col">Item Name</th>
                    <th scope="col">Quantity</th>
                    <th scope="col">Child Items</th>
                    <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row"></th>
                        <td>Cables</td>
                        <td>3</td>
                        <td>
                            <a class="btn btn-info" data-bs-toggle="collapse" href="#collapse1" role="button" aria-expanded="false" aria-controls="collapse1">
                                More Items
                            </a>
                        </td>
                        <td></td>
                    </tr>
                    <tr class="collapse" id="collapse1">
                        <th scope="row"></th>
                        <td>HDMI 1</td>
                        <td></td>
                        <td>18Gbps, 6ft, 4K/60Hz</td>
                        <td>                            
                            <button type="button" class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                                Retire Item
                            </button>
                        </td>
                    </tr>
                    <tr>
                    <th scope="row">2</th>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                    </tr>
                    <tr>
                    <th scope="row">3</th>
                    <td colspan="2">Larry the Bird</td>
                    <td>@twitter</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>

    <!-- Retire Modal -->
    <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
        <div class="modal-header">
            <h5 class="modal-title" id="staticBackdropLabel">Modal title</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
            ...
        </div>
        <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary">Confirm</button>
        </div>
        </div>
    </div>
    </div>
</template>

<script>
export default {
  name: 'DataTable',
}
</script>
