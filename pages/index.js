import Layout from "../components/Layouts/Layout";
import Appointments from "../components/SectionsPages/Appointments";
import CardHomePage from "../components/SectionsPages/CardHomePage";
import InfoCardUser from "../components/SectionsPages/infoCardUser";


export default function Home() {
  return (
    <Layout>
      <div className=" grid grid-cols-12 gap-x-4 mt-4">
        <div className=" lg:col-span-3 col-span-full">
          <InfoCardUser />
        </div>
        <div className=" lg:col-span-9 col-span-full">
          <Appointments />
        </div>
        <div className="col-span-12 mt-4 pt-3 border-t-2 w-full">
          <section>
            <div className=" grid grid-cols-3 gap-6">
              {[{id:1},{id:2},{id:3},{id:4},{id:5},{id:6}].map((data)=>(
                <CardHomePage key={data.id}/>
              ))}
              
            </div>
          </section>
        </div>
      </div>
    </Layout>
  );
}
