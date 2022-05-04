import React, { useState, useMemo, useEffect, useCallback } from "react";
// import DataTable from "react-data-table-component";
// import { Link } from "react-router-dom";
// import SkeletonTicketList from "../../../loaders/SkeletonTicketList";
// import { AssignAssembly, DeleteAssignedAssemblies, GetAssignedAssemblies, GetAvailableAssemblies } from "../../../services/CourseService";
// import Swal from "sweetalert2";
// import { ColorCode } from "../../systemadministration/usermanagement/CheckRole";
// import moment from "moment";

const Assemblies = (props) => {

  const [searchAssigned, setSearchAssigned] = useState("");
  const [searchAvailable, setSearchAvailable] = useState("");
  const [assignedRec, setAssignedRec] = useState([]);
  const [availableRec, setAvailableRec] = useState([]);
  const [versionAssigned, setVersionAssigned] = useState([]);
  const [selectedVersionAssignedCheck, setSelectedVersionAssignedCheck] = useState({});
  const [isAssignData, setIsAssignData] = useState(false);
  const [isAvailData, setIsAvailData] = useState(false);
  const [version, setVersion] = useState([]);
  const [selectedVersionCheck, setSelectedVersionCheck] = useState({});

//   useEffect(() => {
//     getTableData();
//   }, [])

//   const getTableData = () => {
//     GetAvailableAssemblies(props.userId).then(data => {
//       console.log("data ---> ", data);
//       setAvailableRec(data && data.data && data.data.assemblies_list ? data.data.assemblies_list : []);
//       setIsAssignData(true);
//     }).catch(error => {
//       console.log("error ---> ", error);
//       setIsAssignData(true);
//     })

//     GetAssignedAssemblies(props.userId).then(data => {
//       console.log("data -=-=-=-=> ", data);
//       setAssignedRec(data && data.data && data.data.assemblies_list ? data.data.assemblies_list : []);
//       setIsAvailData(true);
//     }).catch(error => {
//       console.log("error ====> ", error);
//       setIsAvailData(true);
//     })
//   }

//   const assignedColumns = useMemo(() => [
//     {
//       name: "No",
//       selector: "index",
//       sortable: false,
//       // maxWidth: "100px",
//       // justifyContent: "left",
//       cell: (row, index) => (
//         <p>
//           <span><b>{++index}</b></span>
//         </p>
//       ),
//     },
//     {
//       name: "Name",
//       selector: "name",
//       sortable: true,
//       wrap: true,
//       maxWidth: "250px",
//       cell: (row) =>
//         row.name ?
//           <p><a href="javascript:void(0);">{row.name}</a></p>
//           // <p>{row.name}</p> 
//           : <p>-</p>,
//     },
//     {
//       name: "Creation Date",
//       selector: "item_date",
//       sortable: true,
//       wrap: true,
//       maxWidth: "250px",
//       cell: (row) =>
//         <>
//           {row.item_date ?
//             <div className="dateTime">
//               <p className="right-space">{moment(row.item_date).format(`D MMM 'YY`)}</p>
//               <p>{moment(row.item_date).format(`HH:mm a`)}</p>
//             </div> : "-"}
//         </>
//     },
//     {
//       name: "Version",
//       selector: "item_version",
//       // minWidth: "250px",
//       sortable: true,
//       cell: (row) =>
//         // row.item_version ? <p>{row.item_version}</p> : <p>-</p>,
//         row.item_version ? <p>
//           {ColorCode(row.item_version.toLowerCase())}
//         </p> : <p>-</p>,
//     },
//     {
//       name: "",
//       selector: "",
//       maxWidth: "50px",
//       cell: (row) => (
//         <div className="assessment-08 btn-dropdown-grp">
//           <div className="as-buttons">
//             <Link to={{ pathname: "https://www.myaie.ac/cadcocms/ref_assign_assembly.php?intake=" + props.userId }} target="_blank">
//               <button className="btn btn-primary rounded-circle" title="Open">
//                 <i className="fal fa-folder-open"></i>
//               </button>
//             </Link>
//             <button className="btn btn-danger rounded-circle btn-dropdown-item" title="Remove from Course" onClick={() => removeAssembly(row.ref_id)}><i className="fal fa-trash-alt"></i></button>
//           </div>
//         </div>
//       ),
//     },
//   ]);

  const handleSearchFilter = (e) => {
    const value = e.target.value;
    setSearchAssigned(value);
  };

//   const assignmentToRender = () => {
//     let updatedData = [];
//     let allData = assignedRec;
//     if (searchAssigned.length) {
//       let name = allData.filter((item) => {
//         let includes = item.name.toString().toLowerCase().includes(searchAssigned.toLowerCase());
//         if (includes) {
//           // console.log("name: ", includes);
//           return includes;
//         } else return null;
//       });

//       let creationDate = allData.filter((item) => {
//         let date = item.item_date && moment(item.item_date).format(`D MMM 'YY`).toString() + moment(item.item_date).format(`HH:mm a`).toString();
//         let includes = date.toString().toLowerCase().includes(searchAssigned.toLowerCase());
//         if (includes) {
//           // console.log("name: ", includes);
//           return includes;
//         } else return null;
//       });

//       let data = [...name, ...creationDate];
//       let unique = [...new Set(data)];

//       updatedData = unique;
//     } else {
//       updatedData = allData;
//     }

//     if (versionAssigned.length) {
//       let tempStatus = updatedData;
//       let tempResult = tempStatus.filter((item) => {
//         const startsWith = versionAssigned.find(function (post, index) {
//           if (post.toString().toLowerCase() === item.item_version.toString().toLowerCase()) return item;
//         });
//         if (startsWith) {
//           return startsWith;
//         } else return null;
//       });

//       updatedData = tempResult;
//     }

//     if (searchAssigned.length || versionAssigned.length) {
//       return updatedData;
//     } else {
//       return assignedRec;
//     }
//   };

  const resetFilter = () => {
    setSearchAssigned("");
    setVersionAssigned([]);
    setSelectedVersionAssignedCheck({});
  };

//   const removeAssembly = (id) => {
//     Swal.fire({
//       title: "Are you sure?",
//       // text: "You won't be able to revert this!",
//       icon: "warning",
//       showCancelButton: true,
//       confirmButtonColor: "#3085d6",
//       cancelButtonColor: "#d33",
//       confirmButtonText: "Yes, delete it!",
//     }).then((result) => {
//       if (result.isConfirmed) {
//         console.log("id -=-=-=-= ", id);
//         DeleteAssignedAssemblies(id).then(data => {
//           console.log("deleted ---===> ", data);
//           getTableData();
//           Swal.fire("Deleted!", "Your record has been deleted.", "success");
//         }).catch(error => {
//           console.log("error while deleting >>>>> ", error);
//         })
//       }
//     })
//   }

//   const availableColumns = useMemo(() => [
//     {
//       name: "No",
//       selector: "index",
//       sortable: false,
//       // maxWidth: "100px",
//       // justifyContent: "left",
//       cell: (row, index) => (
//         <p>
//           <span><b>{++index}</b></span>
//         </p>
//       ),
//     },
//     {
//       name: "Name",
//       selector: "name",
//       sortable: true,
//       wrap: true,
//       maxWidth: "250px",
//       cell: (row) =>
//         row.name ?
//           <p><a href="javascript:void(0);">{row.name}</a></p>
//           // <p>{row.name}</p>
//           : <p>-</p>,
//     },
//     {
//       name: "Creation Date",
//       selector: "item_date",
//       sortable: true,
//       wrap: true,
//       maxWidth: "250px",
//       cell: (row) =>
//         <>
//           {row.item_date ?
//             <div className="dateTime">
//               <p className="right-space">{moment(row.item_date).format(`D MMM 'YY`)}</p>
//               <p>{moment(row.item_date).format(`HH:mm a`)}</p>
//             </div> : "-"}
//         </>
//     },
//     {
//       name: "Version",
//       selector: "item_version",
//       // minWidth: "250px",
//       sortable: true,
//       cell: (row) =>
//         row.item_version ?
//           <p>
//             {ColorCode(row.item_version.toLowerCase())}
//           </p>
//           : <p>-</p>,
//     },
//     {
//       name: "",
//       selector: "",
//       maxWidth: "50px",
//       cell: (row) => (
//         <div className="assessment-08 btn-dropdown-grp">
//           <div className="as-buttons">
//             <Link to={{ pathname: "https://www.myaie.ac/cadcocms/ref_assign_assembly.php?intake=" + props.userId }} target="_blank">
//               <button className="btn btn-sm btn-primary rounded-circle" title="Open">
//                 <i className="fal fa-folder-open"></i>
//               </button>
//             </Link>
//             <button className="btn btn-primary rounded-circle btn-dropdown-item" title="Add to Course" onClick={() => assignAssembly(row.id)}><i className="fal fa-plus"></i></button>
//           </div>
//         </div>
//       ),
//     },
//   ]);

  const handleAvailableSearchFilter = (e) => {
    const value = e.target.value;
    setSearchAvailable(value);
  };

//   const availableToRender = () => {
//     // return availableRec;

//     let updatedData = [];
//     let allData = availableRec;
//     if (searchAvailable.length) {
//       let name = allData.filter((item) => {
//         let includes = item.name.toString().toLowerCase().includes(searchAvailable.toLowerCase());
//         if (includes) {
//           // console.log("name: ", includes);
//           return includes;
//         } else return null;
//       });

//       let creationDate = allData.filter((item) => {
//         let date = item.item_date && moment(item.item_date).format(`D MMM 'YY`).toString() + moment(item.item_date).format(`HH:mm a`).toString();
//         let includes = date.toString().toLowerCase().includes(searchAvailable.toLowerCase());
//         if (includes) {
//           // console.log("name: ", includes);
//           return includes;
//         } else return null;
//       });

//       let data = [...name, ...creationDate];
//       let unique = [...new Set(data)];

//       updatedData = unique;
//     } else {
//       updatedData = allData;
//     }

//     if (version.length) {
//       let tempStatus = updatedData;
//       let tempResult = tempStatus.filter((item) => {
//         const startsWith = version.find(function (post, index) {
//           if (post.toString().toLowerCase() === item.item_version.toString().toLowerCase()) return item;
//         });
//         if (startsWith) {
//           return startsWith;
//         } else return null;
//       });

//       updatedData = tempResult;
//     }

//     if (searchAvailable.length || version.length) {
//       return updatedData;
//     } else {
//       return availableRec;
//     }
//   };

  const resetAssignedFilter = () => {
    setSearchAvailable("");
    setVersion([]);
    setSelectedVersionCheck({});
  };

//   const assignAssembly = (id) => {
//     Swal.fire({
//       title: "Are you sure?",
//       // text: "You won't be able to revert this!",
//       icon: "confirm",
//       showCancelButton: true,
//       confirmButtonColor: "#3085d6",
//       cancelButtonColor: "#d33",
//       confirmButtonText: "Yes, Add it!",
//     }).then((result) => {
//       if (result.isConfirmed) {

//         AssignAssembly(props.userId, id).then(data => {
//           console.log("added ------> ", data);
//           getTableData();
//         }).catch(error => {
//           console.log("error <><><><>< ", error);
//         })

//         Swal.fire("Added!", "Your record has been added.", "success");
//       }
//     })
//   }

  const handleVersionFilter = (e, table = "available") => {
    const value = e.target.value;
    let arr = table == "available" ? version : versionAssigned;
    if (arr.includes(value)) {
      arr.splice(arr.indexOf(value), 1);
    } else {
      arr.push(value);
    }
    let id = e.target.id;
    if (table == "available") {
      setVersion(arr);
      setSelectedVersionCheck({ ...selectedVersionCheck, [id]: !selectedVersionCheck[id] });
    } else {
      setVersionAssigned(arr);
      setSelectedVersionAssignedCheck({ ...selectedVersionAssignedCheck, [id]: !selectedVersionAssignedCheck[id] });
    }
  }

  return (
    <>
      <div className="card card-profile-info-card mb-30">
        <div className={`card-body `}>

          <div className="my-tickets-info-list Tickets-main-wrap">
            <div className="edit-icon new-card-header">
              <div className="card-header">Assigned Assemblies</div>
            </div>

            <div className="custom-table-div filter-search-icon card card-table-custom course-table-filter-sec">
              <div className=" filter-search-bar-blk">
                <div className="filter-button-group">
                  <div className="filter-eff filter-data-btn">
                    <button className="filter-buttons">
                      <i className="fal fa-filter"></i>
                    </button>
                  </div>
                  <div className="assessment-table-status">
                    <div className="btn-type-Status dropdown-comman">
                      <div className="dropdown multiselect">
                        <button
                          className={`btn btn-default dropdown-toggle ${versionAssigned.length ? "btn-selected" : ""} `} type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true" >
                          <span>
                            Version <i className="fal fa-angle-down"></i>
                          </span>
                        </button>
                        <form className="dropdown-menu remove-list-style">
                          <ul aria-labelledby="dropdownMenu2">
                            <li className="cat cat-greenhex">
                              <input type="checkbox" id="action11" value="V1" onClick={(e) => { handleVersionFilter(e, "assigned") }} checked={selectedVersionAssignedCheck.action11} />
                              <label htmlFor="action11">
                                <span className="cat cat-greenhex">
                                  <i className="fas fa-circle mr-1"></i>V1</span>
                              </label>
                            </li>
                            <li className="cat cat-blue">
                              <input type="checkbox" id="action12" value="V2" onClick={(e) => { handleVersionFilter(e, "assigned") }} checked={selectedVersionAssignedCheck.action12} />
                              <label htmlFor="action12">
                                <span className="cat cat-blue">
                                  <i className="fas fa-circle mr-1"></i>V2</span>
                              </label>
                            </li>
                            <li className="cat cat-yellow">
                              <input type="checkbox" id="action13" value="V3" onClick={(e) => { handleVersionFilter(e, "assigned") }} checked={selectedVersionAssignedCheck.action13} />
                              <label htmlFor="action13">
                                <span className="cat cat-yellow">
                                  <i className="fas fa-circle mr-1"></i>V3</span>
                              </label>
                            </li>
                            <li className="cat cat-red">
                              <input type="checkbox" id="action14" value="V4" onClick={(e) => { handleVersionFilter(e, "assigned") }} checked={selectedVersionAssignedCheck.action14} />
                              <label htmlFor="action14">
                                <span className="cat cat-red">
                                  <i className="fas fa-circle mr-1"></i>V4</span>
                              </label>
                            </li>
                          </ul>
                        </form>
                      </div>
                    </div>
                  </div>
                  <div className="button-reset dropdown-comman">
                    <button className="btn btn-primary" onClick={resetFilter}>
                      <i className="fal fa-redo"></i>Reset
                    </button>
                  </div>
                  
                </div>
              </div>
              <div className="system-administration-table table-responsive">
                <div className="table-responsive-div">
                  <div id="assessment-table-main_wrapper" className="dataTables_wrapper no-footer">
                    <div id="assessment-table-main_wrapper" className="dataTables_wrapper no-footer">
                      <div id="assessment-table-main_filter" className="dataTables_filter">
                        <label>
                          <input type="search" className="" placeholder="Search Users" aria-controls="assessment-table-main" onChange={handleSearchFilter} value={searchAssigned} />
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="filter-search-icon card card-table-custom roles-table">
                {/* {!isAssignData && <SkeletonTicketList />}
                {isAssignData && <DataTable data={assignmentToRender()} columns={assignedColumns} pagination={true} defaultSortField="name" defaultSortAsc={true} />} */}
              </div>
            </div>
          </div>





          </div>
      </div>
    </>
  );
};

export default Assemblies;