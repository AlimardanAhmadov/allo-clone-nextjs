import '../BackBone/BackBone.css';


export default function BackBone() {
    return (
        <div className='overflow-x-hidden relative digital-backbone' style={{ top: '940px' }}>
            <div className='backbone-title mx-auto'>
                <h1 className='semibold my-auto text-left'>Your Digital Backbone</h1>
            </div>
            <div className='backbone-list'>
                <div className='backbone-list-item px-0 relative'>
                    <img src="/images/BackBoneImage.svg" alt="Digital BackBoneImage" />
                    <h4 className='semifold'>Extremely simple</h4>
                    <h4 className='semifold my-0'>No gastro-experience or special training needed: just start and use it.</h4>
                </div>
                <div className='backbone-list-item px-0 relative'>
                    <img src="/images/BackBoneImage2.svg" alt="Digital BackBoneImage" />
                    <h4 className='semifold my-0'>Increase Revenue</h4>
                    <h4>Turn your visitors into regulars digitally via strong online presence.</h4>
                </div>
                <div className='backbone-list-item px-0 relative'>
                    <img src="/images/BackBoneImage3.svg" alt="Digital BackBoneImage" />
                    <h4 className='semifold my-0'>Always there</h4>
                    <h4>24/7 support via hotline, online chat, and Email. allO got your back.</h4>
                </div>
                <div className='backbone-list-item px-0 relative'>
                    <img src="/images/BackBoneImage4.svg" alt="Digital BackBoneImage" />
                    <h4 className='semifold my-0'>Best performance</h4>
                    <h4>Restaurants using allO System have outperformed their peers by 20-30%</h4>
                </div>
            </div>
        </div>
    );
}