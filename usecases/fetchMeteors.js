import { getMeteorData } from '../repository/index.js'

export const fetchMeteorsUseCase = async (
  startDate,
  endDate,
  count,
  wereDangerousMeteors
) => {
  const meteorsData = await getMeteorData(startDate, endDate)

  const meteors = Object.values(meteorsData)
    .flat()
    .map((meteor) => ({
      id: meteor.id,
      name: meteor.name,
      diameter: meteor.estimated_diameter.meters,
      is_potentially_hazardous_asteroid:
        meteor.is_potentially_hazardous_asteroid,
      close_approach_date_full:
        meteor.close_approach_data[0].close_approach_date_full,
      relative_velocity: parseFloat(
        meteor.close_approach_data[0].relative_velocity.kilometers_per_second
      )
    }))

  const responseData = { meteorData: meteors }

  if (wereDangerousMeteors) {
    responseData.wereDangerousMeteors = meteors.some(
      (meteor) => meteor.is_potentially_hazardous_asteroid
    )
  }

  if (count) responseData.count = meteors.length

  return responseData
}
