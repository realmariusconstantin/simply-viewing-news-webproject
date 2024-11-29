<template>
  <div class="AdminContainer">
    <aside class="sidePanel">
      <div class="profile">
        <button class=profileImage>
          profile
        </button>
        <p>NAME:</p>
      </div>
<!--  Side Panel Buttons-->
      <div class="sidePanelButtons">
        <div>
          <button>
            Dashboard
          </button>
        </div>
        <div>
          <button>
            Admin Settings
          </button>
        </div>
        <div>
          <button>
            Articles
          </button>
        </div>
        <div>
          <button>
            Traffic
          </button>
        </div>
        <div>
          <button>
            Users
          </button>
        </div>
      </div>
    </aside>
<!--  Admin Page-->
    <div class="panel">
      <div class="Header">
        <h1>Admin Page</h1>
      </div>
      <div class="AdminEdit">
        <table>
<!--          TABLE-->
          <tr>
            <th>Article Title</th>
            <th>Author</th>
            <th>Published Date</th>
            <th>Actions</th>
          </tr>
          <tr>
            <td>Article 1</td>
            <td>Author 1</td>
            <td>01/01/2021</td>
            <td>
<!--                Edit and Delete Buttons-->
              <button class="edit-btn">Edit</button>
              <button class="delete-btn">Delete</button>
            </td>
          </tr>
          <tr>
            <td>Article 2</td>
            <td>Author 2</td>
            <td>01/01/2021</td>
            <td>
<!--                Edit and Delete Buttons-->
              <button class="edit-btn">Edit</button>
              <button class="delete-btn">Delete</button>
            </td>
          </tr>
          <tr>
            <td>Article 3</td>
            <td>Author 3</td>
            <td>01/01/2021</td>
            <td>
<!--                Edit and Delete Buttons-->
              <button class="edit-btn">Edit</button>
              <button class="delete-btn">Delete</button>
            </td>
          </tr>
        </table>

      </div>
    </div>
  </div>

</template>
<style>
.AdminContainer {
  border-radius: 2%;
  width: 75%;
  height: 75vh;
  display: flex;
  background-color: white;
  box-shadow: #cccccc 0px 0px 10px;



}

.sidePanel {
  width: 20%;
  height: 100%;
  background-color: #000000;
 border-top-left-radius: 3%;
  border-bottom-left-radius: 3%;
  display: grid;
  grid-template-rows: repeat(2, 1fr);
  justify-content: center;
  align-items: center
}

.profile {
  display: grid;
  grid-template-rows: repeat(2, 1fr);
  justify-content: center;
  align-items: center;
  gap: 10px;

  button {
    width: 100px;
    height: 100px;
    background-color: #ffffff;
    border-radius: 50%;
    border: none;
    font-size: 1.2rem;
    color: #000000;
    cursor: pointer;
  }

  p {
    font-size: 1.2rem;
    color: #ffffff;
  }
}

.sidePanelButtons {
  display: grid;
  grid-template-rows: repeat(5, 1fr);
  justify-content: center;
  align-items: center;
  gap: 10px;

  button {
    width: 150px;
    height: 50px;
    background-color: #ffffff;
    border-radius: 10%;
    border: none;
    border-bottom: 1px solid #e0e0e0;
    font-size: 1.2rem;
    color: #000000;
    cursor: pointer;


  }
}

.Header {
  width: 70%;
  font-size: 1rem;
  color: #ffffff;

}

.panel {
  margin-left: 2%;
  margin-top: 10%;
  border-radius:5%;
  background-color: #000000;
  width: 75%;
  height: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;


  h1 {
    color: #ffffff;
  }
}



table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 10px;
}

table thead {
  background-color: #000000;
}

table th,
table td {
  text-align: left;
  padding: 10px;
  border: 1px solid #ddd;
}

table th {
  font-weight: bold;
}

table tbody tr:nth-child(even) {
  background-color: #000000;
}


.edit-btn {
  background-color: #28a745;
  margin-right: 10px;
  color: white;
  border: none;
  padding: 5px 10px;
  font-size: 14px;
  border-radius: 4px;
  cursor: pointer;
}

.edit-btn:hover {
  background-color: #218838;
}

.delete-btn {
  background-color: #dc3545;
  color: white;
  border: none;
  padding: 5px 10px;
  font-size: 14px;
  border-radius: 4px;
  cursor: pointer;
}

.delete-btn:hover {
  background-color: #c82333;
}

.AdminEdit{
  width: 80%;
  height: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
}
</style>

