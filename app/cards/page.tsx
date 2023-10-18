import CardVisual from "./components/CardVisual";
import VirtualForm from "./components/Form";

const Home = () => {
    return (
        <div className="">
            <section className="space-y-24 w-[40%] mx-auto pt-16">
                <section className="w-[70%] mx-auto">
                    <CardVisual />
                </section>
                <VirtualForm />
            </section>
        </div>
    );
}

export default Home;