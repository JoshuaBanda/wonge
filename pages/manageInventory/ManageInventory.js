import EditProducts from "../oldVersion/EditProducts";
import UploadItems from "../oldVersion/UploadItems";

const ManageInventory = () => {
    return (
        <>
            <div style={{
                position:"relative",
                marginTop:"100px",
                marginBottom:"150px",
            }}>
            <UploadItems/>
            <EditProducts/>

            </div>
        </>
    );
}
 
export default ManageInventory;