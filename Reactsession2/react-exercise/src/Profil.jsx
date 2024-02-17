import Avatar from "./Avatar";

export default function Profil ({gender, origin}) {
    return (
        <div>
            <Avatar name="haryy" surName="test"/>
            <h1>{gender}</h1>
            <h1>{origin}</h1>
        </div>
    )

}