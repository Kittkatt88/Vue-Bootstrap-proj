<template>
    <div class="container">
        <div class="col-md-12">
            <div>
                <div>
                    <h3 style="text-align:left;">List of Items</h3>
                    <table class="table table-condensed table-striped">
                        <thead>
                            <tr>
                                <th>Choose</th>
                                <th>Fist Name</th>
                                <th>Last Name</th>
                                <th>City</th>
                                <th>State</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr data-bs-toggle="collapse" href="#demo1" role="button" aria-expanded="false" aria-controls="collapse1">
                                <td><input type="checkbox" name="progress" id="progress1" value="1" tabIndex="1" onClick="{{ckChange(this)}}"></td>
                                <td>Carlos</td>
                                <td>Mathias</td>
                                <td>Leme</td>
                                <td>SP</td>
                                <td>new</td>
                            </tr>
                            <tr>
                            <td colspan="12" class="hiddenRow">
                                <div class="accordian-body collapse" id="demo1"> 
                                    <table class="table table-striped">
                                        <thead>
                                            <tr class="info">
                                                <th>Job</th>
                                                <th>Company</th>
                                                <th>Salary</th>		
                                                <th>Date On</th>	
                                                <th>Date off</th>	
                                                <th>Action</th>	
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr data-bs-toggle="collapse" href="#demo10" role="button" aria-expanded="false" aria-controls="collapse1">
                                                <td> <a href="#">Enginner Software</a></td>
                                                <td>Google</td>
                                                <td>U$8.00000 </td>
                                                <td> 2016/09/27</td>
                                                <td> 2017/09/27</td>
                                                <td> 
                                                    <button type="button" class="btn btn-danger mx-3" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                                                        Retire Item
                                                    </button>
                                                    <button type="button" class="btn btn-warning" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                                                        Edit Item
                                                    </button>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td colspan="12" class="hiddenRow">
                                                    <div class="accordian-body collapse" id="demo10"> 
                                                        <table class="table table-striped">
                                                            <thead>
                                                                <tr>
                                                                    <td><a href="#"> XPTO 1</a></td>
                                                                    <td>XPTO 2</td>
                                                                    <td>Obs</td>
                                                                </tr>
                                                                <tr>
                                                                    <th>item 1</th>
                                                                    <th>item 2</th>
                                                                    <th>item 3 </th>
                                                                    <th>item 4</th>
                                                                    <th>item 5</th>
                                                                    <th>Actions</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                <tr>
                                                                    <td>item 1</td>
                                                                    <td>item 2</td>
                                                                    <td>item 3</td>
                                                                    <td>item 4</td>
                                                                    <td>item 5</td>
                                                                    <td>
                                                                        <a href="#" class="btn btn-default btn-sm">
                                                                            <i class="glyphicon glyphicon-cog"></i>
                                                                        </a>
                                                                    </td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </div> 
                                                </td>
                                            </tr>                            
                                            <tr>
                                                <td>Scrum Master</td>
                                                <td>Google</td>
                                                <td>U$8.00000 </td>
                                                <td> 2016/09/27</td>
                                                <td> 2017/09/27</td>
                                                <td>
                                                    <a href="#" class="btn btn-default btn-sm">
                                                        <i class="glyphicon glyphicon-cog"></i>
                                                    </a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>Back-end</td>
                                                <td>Google</td>
                                                <td>U$8.00000 </td>
                                                <td> 2016/09/27</td>
                                                <td> 2017/09/27</td>
                                                <td>
                                                    <a href="#" class="btn btn-default btn-sm">
                                                        <i class="glyphicon glyphicon-cog"></i>
                                                    </a>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>Front-end</td>
                                                <td>Google</td>
                                                <td>U$8.00000 </td>
                                                <td> 2016/09/27</td>
                                                <td> 2017/09/27</td>
                                                <td> 
                                                    <a href="#" class="btn btn-default btn-sm">
                                                        <i class="glyphicon glyphicon-cog"></i>
                                                    </a>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div> 
                            </td>
                            </tr>
                                <tr data-bs-toggle="collapse" href="#demo2" role="button" aria-expanded="false" aria-controls="collapse1">
                                <td><input type="checkbox" name="progress" id="progress2" value="1" tabIndex="1" onClick="ckChange(this)"></td>
                                <td>Silvio</td>
                                <td>Santos</td>
                                <td>São Paulo</td>
                                <td>SP</td>
                                <td> new</td>
                            </tr>
                            <tr>
                                <td colspan="6" class="hiddenRow"><div id="demo2" class="accordian-body collapse">Demo2</div></td>
                            </tr>
                            <tr data-bs-toggle="collapse" href="#demo3" role="button" aria-expanded="false" aria-controls="collapse1">
                                <td><input type="checkbox" name="progress" id="progress3" value="1" tabIndex="1" v-on:click="ckChange"></td>
                                <td>John</td>
                                <td>Doe</td>
                                <td>Dracena</td>
                                <td>SP</td>
                                <td> New</td>
                            </tr>
                            <tr>
                                <td colspan="6" class="hiddenRow"><div id="demo3" class="accordian-body collapse">Demo3 sadasdasdasdasdas</div></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
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
    name: 'DataTable1'
}


</script>