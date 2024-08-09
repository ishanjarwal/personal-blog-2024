import HomepageCategoryList from "@/components/homepageCategoryList/HomepageCategoryList"
import HomepageGrid from "@/components/homepageGrid/HomepageGrid"
import HomepageSlideshow from "@/components/homepageSlideshow/HomepageSlideshow"


const Home = () => {

  return (
    <div className='min-h-screen w-full xl:px-16 md:px-8 px-4'>
      {/* <HomepageSlideshow /> */}
      {/* <HomepageCategoryList /> */}
      <HomepageGrid />
    </div>
  )
}

export default Home
