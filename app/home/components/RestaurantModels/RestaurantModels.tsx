import '../RestaurantModels/RestaurantModels.css';

const RestaurantModels = () => {
    return (
        <div className='flex flex-col gap-2 mx-auto restaurant-models static'>
            <div className="products-section-title mb-8">
                <h2 className="text-left my-0">Built for all restaurants</h2>
            </div>
            <div className='flex items-center'>
                <div className='model-card bg-white flex flex-col items-start mx-auto'>
                    <img src="/images/independent.svg" alt="Independent" loading='lazy' />
                    <h4 className='semifold'>Independent</h4>
                    <h4 className='regular'>Simple and affordable</h4>
                </div>
                <div className='model-card bg-white flex flex-col items-start mx-auto ml-6'>
                    <img src="/images/franchise.svg" alt="Independent" loading='lazy' />
                    <h4 className='semifold'>Franchise/Chain</h4>
                    <h4 className='regular'>All your restaurants connected</h4>
                </div>
                <div className='model-card bg-white flex flex-col items-start mx-auto ml-6'>
                    <img src="/images/dark-kitchen.svg" alt="Dark Kitchen" loading='lazy' />
                    <h4 className='semifold'>Dark Kitchen</h4>
                    <h4 className='regular'>Delivery experience at one place</h4>
                </div>
            </div>
        </div>
    );
};

export default RestaurantModels;
