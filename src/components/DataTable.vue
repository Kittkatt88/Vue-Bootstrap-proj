<template>
    <div class="container-fluid px-5">
        <div class="row"> 
            <input type="text" class="searchBar" v-model="input" placeholder="Search items..." />
        </div>
        <!--TODO: Search Result code implemented with the List of Items -->
        <div id="searchResultTable">
            <p style="text-decoration:underline; font-weight:bold;">Search Result:</p>
            <div class="item fruit" v-for="fruit in filteredList()" :key="fruit">
            <p>{{ fruit }}</p>
            </div>
            <div class="item error" v-if="input&&!filteredList().length">
            <p>No results found!</p>
            </div>
        </div> 
        
        <div class="row">
            <!-- Search Filter -->
            <div class="col-4 my-3 p-3 border border-dark">
                <h3 style="text-align:left;">Search Filter</h3>
                <ul class="list-unstyled">
                    <li class="my-3"><span>Cables:</span>
                        <ul>
                            <li class="list-unstyled"><input class="form-check-input me-2" type="checkbox" value="" aria-label="Checkbox for following text input">HDMI</li>
                            <li class="list-unstyled"><input class="form-check-input me-2" type="checkbox" value="" aria-label="Checkbox for following text input">USB</li>
                            <li class="list-unstyled"><input class="form-check-input me-2" type="checkbox" value="" aria-label="Checkbox for following text input">USB-C</li>
                        </ul>
                    </li>
                    <li class="my-3"><span>CPUs:</span>
                        <ul>
                            <li class="list-unstyled"><input class="form-check-input me-2" type="checkbox" value="" aria-label="Checkbox for following text input">Intel</li>
                            <li class="list-unstyled"><input class="form-check-input me-2" type="checkbox" value="" aria-label="Checkbox for following text input">AMD</li>
                        </ul>
                    </li>
                    <li class="my-3"><span>Motherboards:</span>
                        <ul>
                            <li class="list-unstyled"><input class="form-check-input me-2" type="checkbox" value="" aria-label="Checkbox for following text input">Some Brand</li>
                            <li class="list-unstyled"><input class="form-check-input me-2" type="checkbox" value="" aria-label="Checkbox for following text input">Another Brand</li>
                            <li class="list-unstyled"><input class="form-check-input me-2" type="checkbox" value="" aria-label="Checkbox for following text input">Another Other Brand</li>
                        </ul>
                    </li>
                </ul>
            </div>
            <!-- List of Items -->
            <div class="col-8 table-responsive my-3 p-3 border border-dark">
                <h3 style="text-align:left;">List of Items</h3>
                <table class="table table-condensed table-striped">
                    <thead>
                        <tr>
                            <!-- <th>Choose to locate</th> -->
                            <th>Item Name</th>
                            <th>Quantity</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <!-- TODO: ckChange function needs to be called from the assets/functionsJS.js somehow, to disable checkboxes when one is checked and to re-enable when unchecked -->
                            <!-- <td><input type="checkbox" name="progress" id="progress1" value="1" tabIndex="1" onClick="{{ckChange(this)}}"></td> -->
                            <td>Cables</td>
                            <td>3</td>
                            <td>
                                <button type="button" class="btn btn btn-info mx-3" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                                    Locate Item
                                </button>
                                <a class="btn btn-outline-primary" data-bs-toggle="collapse" href="#demo1" role="button" aria-expanded="false" aria-controls="demo1">
                                    More Items
                                </a>
                            </td>
                        </tr>
                        <tr>
                            <td colspan="12" class="hiddenRow">
                                <div class="accordian-body collapse" id="demo1"> 
                                    <table class="table table-striped">
                                        <thead>
                                            <tr>
                                                <th>Item</th>	
                                                <th>Item Details</th>	
                                                <th>Actions</th>	
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>HDMI 1</td>
                                                <td>18Gbps, 6ft, 4K/60Hz</td>
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
                                                <td>USB 3.0</td>
                                                <td>10ft, 480 Mbps</td>
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
                                                <td>USB-C</td>
                                                <td>6ft, 60W</td>
                                                <td> 
                                                    <button type="button" class="btn btn-danger mx-3" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                                                        Retire Item
                                                    </button>
                                                    <button type="button" class="btn btn-warning" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                                                        Edit Item
                                                    </button>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div> 
                            </td>
                        </tr>
                        
                        <!-- Second Items: -->
                        <tr>
                            <!-- TODO: ckChange function needs to be called from the assets/functionsJS.js somehow, to disable checkboxes when one is checked and to re-enable when unchecked -->
                            <!-- <td><input type="checkbox" name="progress" id="progress1" value="1" tabIndex="1" onClick="{{ckChange(this)}}"></td> -->
                            <td>Cables</td>
                            <td>3</td>
                            <td>
                                <button type="button" class="btn btn btn-info mx-3" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                                    Locate Item
                                </button>
                                <a class="btn btn-outline-primary" data-bs-toggle="collapse" href="#demo2" role="button" aria-expanded="false" aria-controls="demo2">
                                    More Items
                                </a>
                            </td>
                        </tr>
                        <tr>
                            <td colspan="12" class="hiddenRow">
                                <div class="accordian-body collapse" id="demo2"> 
                                    <table class="table table-striped">
                                        <thead>
                                            <tr>
                                                <th>Item</th>	
                                                <th>Item Details</th>	
                                                <th>Actions</th>	
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>HDMI 1</td>
                                                <td>18Gbps, 6ft, 4K/60Hz</td>
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
                                                <td>USB 3.0</td>
                                                <td>10ft, 480 Mbps</td>
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
                                                <td>USB-C</td>
                                                <td>6ft, 60W</td>
                                                <td> 
                                                    <button type="button" class="btn btn-danger mx-3" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                                                        Retire Item
                                                    </button>
                                                    <button type="button" class="btn btn-warning" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                                                        Edit Item
                                                    </button>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div> 
                            </td>
                        </tr>

                        <!-- Third Items -->
                        <tr>
                            <!-- TODO: ckChange function needs to be called from the assets/functionsJS.js somehow, to disable checkboxes when one is checked and to re-enable when unchecked -->
                            <!-- <td><input type="checkbox" name="progress" id="progress1" value="1" tabIndex="1" onClick="{{ckChange(this)}}"></td> -->
                            <td>Cables</td>
                            <td>3</td>
                            <td>
                                <button type="button" class="btn btn btn-info mx-3" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                                    Locate Item
                                </button>
                                <a class="btn btn-outline-primary" data-bs-toggle="collapse" href="#demo3" role="button" aria-expanded="false" aria-controls="demo3">
                                    More Items
                                </a>
                            </td>
                        </tr>
                        <tr>
                            <td colspan="12" class="hiddenRow">
                                <div class="accordian-body collapse" id="demo3"> 
                                    <table class="table table-striped">
                                        <thead>
                                            <tr>
                                                <th>Item</th>	
                                                <th>Item Details</th>	
                                                <th>Actions</th>	
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>HDMI 1</td>
                                                <td>18Gbps, 6ft, 4K/60Hz</td>
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
                                                <td>USB 3.0</td>
                                                <td>10ft, 480 Mbps</td>
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
                                                <td>USB-C</td>
                                                <td>6ft, 60W</td>
                                                <td> 
                                                    <button type="button" class="btn btn-danger mx-3" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                                                        Retire Item
                                                    </button>
                                                    <button type="button" class="btn btn-warning" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                                                        Edit Item
                                                    </button>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div> 
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>

    <!-- Modal -->
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
    name: 'DataTable'
}
</script>

<!-- Search Result Script-->
<script setup>
import { ref } from "vue";
let input = ref("");
const fruits = ["apple", "banana", "orange"];
function filteredList() {
  return fruits.filter((fruit) =>
    fruit.toLowerCase().includes(input.value.toLowerCase())
  );
}
</script>