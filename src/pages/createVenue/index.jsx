import { yupResolver } from '@hookform/resolvers/yup'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import Button from '../../components/button'
import useFetchAuth from '../../hooks/useFetchAuth'
import { StyledForm } from '../../styles/formStyle'
import { PROFILE_URL, VENUES_URL } from '../../utils/constants'
import { schema } from './schema'
import { Wrapper } from './style'
import { useNavigate } from 'react-router-dom'
import Meta from '../../utils/meta'

const CreateVenue = () => {
    const [inputFields, setInputFields] = useState([''])
    const [fetchData] = useFetchAuth()
    const user = localStorage.getItem('name')
    const navigate = useNavigate()

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
    })

    const onSubmit = async (data) => {
        try {
            const formData = { ...data }
            if (formData.media) {
                formData.media = formData.media.filter(
                    (mediaItem) => mediaItem !== ''
                )
            } else {
                formData.media = []
            }
            const manager = {
                venueManager: true,
            }

            await fetchData(`${PROFILE_URL}${user}`, manager, 'PUT')
            await fetchData(VENUES_URL, formData, 'POST')

            navigate('/profile/' + user)
            window.location.reload()
        } catch (err) {
            console.log(err)
        }
    }

    const add = () => {
        setInputFields([...inputFields, ''])
    }

    return (
        <>
            <Meta
                title="Create new venue"
                description="Unlock the potential of your property with Holidaze's easy-to-use venue creation. Seamlessly transform your home into a sought-after vacation rental and start earning."
            />
            <Wrapper>
                <h1>Rent out your home</h1>
                <StyledForm onSubmit={handleSubmit(onSubmit)}>
                    <div>
                        <input
                            type="text"
                            placeholder=" "
                            id="name"
                            {...register('name')}
                        />
                        <label htmlFor="name">*Name of venue</label>
                        <span>{errors.name?.message}&nbsp;</span>
                    </div>
                    <div>
                        <textarea
                            placeholder=" "
                            id="desc"
                            {...register('description')}
                        />
                        <label htmlFor="desc">*Description</label>
                        <span>{errors.description?.message}&nbsp;</span>
                    </div>
                    <div>
                        <input
                            type="number"
                            min="0"
                            placeholder=" "
                            id="price"
                            {...register('price')}
                        />
                        <label htmlFor="price">*Price</label>
                        <span>{errors.price?.message}&nbsp;</span>
                    </div>
                    <div>
                        <input
                            type="number"
                            min="0"
                            placeholder=" "
                            id="maxGuests"
                            {...register('maxGuests')}
                        />
                        <label htmlFor="maxGuests">*Max guests</label>
                        <span>{errors.maxGuests?.message}&nbsp;</span>
                    </div>
                    <div>
                        {inputFields.map((field, idx) => (
                            <div key={idx}>
                                <input
                                    type="text"
                                    placeholder=" "
                                    id={`media-${idx}`}
                                    {...register(`media[${idx}]`)}
                                    style={{ marginBottom: '1rem' }}
                                />
                                {idx === 0 && (
                                    <label htmlFor={`media-${idx}`}>
                                        Media
                                    </label>
                                )}
                                {idx === inputFields.length - 1 && (
                                    <p onClick={add}>Add more</p>
                                )}
                                <span>
                                    {errors.media?.[idx]?.message}&nbsp;
                                </span>
                            </div>
                        ))}
                    </div>
                    <section>
                        <h2>Amenities</h2>
                        <div>
                            <input
                                type="checkbox"
                                {...register('meta.wifi')}
                                id="wifi"
                            />
                            <label htmlFor="wifi">Wifi</label>
                        </div>
                        <div>
                            <input
                                type="checkbox"
                                id="parking"
                                {...register('meta.parking')}
                            />
                            <label htmlFor="parking">Parking available</label>
                        </div>
                        <div>
                            <input
                                type="checkbox"
                                {...register('meta.breakfast')}
                                id="breakfast"
                            />
                            <label htmlFor="breakfast">
                                Breakfast included
                            </label>
                        </div>
                        <div>
                            <input
                                type="checkbox"
                                {...register('meta.pets')}
                                id="pets"
                            />
                            <label htmlFor="pets">Pet friendly</label>
                        </div>
                    </section>
                    <h2>Location</h2>
                    <div>
                        <input
                            type="text"
                            placeholder=" "
                            id="address"
                            {...register('location.address')}
                        />
                        <label htmlFor="address">Address</label>
                        <span>{errors.address?.message}&nbsp;</span>
                    </div>
                    <div>
                        <input
                            type="text"
                            placeholder=" "
                            id="city"
                            {...register('location.city')}
                        />
                        <label htmlFor="city">City</label>
                        <span>{errors.city?.message}&nbsp;</span>
                    </div>
                    <div>
                        <input
                            type="text"
                            placeholder=" "
                            id="zip"
                            {...register('location.zip')}
                        />
                        <label htmlFor="zip">ZIP</label>
                        <span>{errors.zip?.message}&nbsp;</span>
                    </div>
                    <div>
                        <input
                            type="text"
                            placeholder=" "
                            id="country"
                            {...register('location.country')}
                        />
                        <label htmlFor="country">Country</label>
                        <span>{errors.country?.message}&nbsp;</span>
                    </div>
                    <div>
                        <input
                            type="text"
                            placeholder=" "
                            id="continent"
                            {...register('location.continent')}
                        />
                        <label htmlFor="continent">Continent</label>
                        <span>{errors.continent?.message}&nbsp;</span>
                    </div>
                    <Button content="Create venue" />
                </StyledForm>
            </Wrapper>
        </>
    )
}

export default CreateVenue
