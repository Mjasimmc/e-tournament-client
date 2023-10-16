import React from 'react';

const TeamList = ({team}) => {
    return (
        <div className='min-w-[200px] w-[90%]  bg-[#0000007d] !text-white rounded-lg p-2'>
            <table className='min-w-[200px] w-[90%]' >
                <thead>
                    <tr className='m-10 w-full'>
                        <th>No</th>
                        <th>Name</th>
                        <th>access</th>
                    </tr>
                </thead>
                <tbody>
                    {team?.members.map((obj, i) => (
                        <tr key={i + "teamlisting"}>
                            <td className=' text-center'>{i + 1} </td>
                            <td className=' text-center'>{obj.user.name}   </td>
                            {obj.access && <td className=' text-center'>{obj.user._id === team.admin ? "admin" : "user"}</td>}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default TeamList;
