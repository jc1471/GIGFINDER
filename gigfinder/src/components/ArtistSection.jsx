export default function ArtistSection({ artist }) {
    return (
        <div className="artist-section">
            <img src={artist.image} alt={artist.name} />
            <h2>{artist.name}</h2>
            <p>{artist.bio}</p>
            <div>
                <a href={artist.social.instagram}>Instagram</a>
                <a href={artist.social.spotify}>Spotify</a>
            </div>
        </div>
    )
}