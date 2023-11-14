import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import PopularCard from "../../../Components/PopularCard/PopularCard";
import useMenu from "../../../Components/hooks/UseMenu";

const Popular = () => {
    const [menu] = useMenu()
    console.log(menu)

    
            const popularItems = menu.filter(item => item.category === 'popular')
    
    return (
        <div className="mb-20">
            <SectionTitle heading="Our Menu"  subHeading={"Don't miss out"}></SectionTitle>
            <div className="grid gap-6 md:grid-cols-2">
                {
                    popularItems?.map(item => <PopularCard key={item._id} item={item}> </PopularCard>)
                }
            </div>

        </div>
    );
};

export default Popular;