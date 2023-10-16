import React from 'react';

const FormBody = ({ children }) => {
    return (<>
       
        <div className='w-[100%] h-[100vh] flex justify-center items-center z-10 text-[#4e4853]'>
            <div className='min-w-[250px] shadow-2xl shadow-[#000] bg-[#ffefef7d] flex justify-center flex-col items-center p-[10px] rounded-xl'>
                {children}
            </div>
        </div>
    </>
    );
}

export default FormBody;
