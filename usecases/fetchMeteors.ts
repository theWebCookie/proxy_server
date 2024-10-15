import { getMeteorData } from '../repository/index.ts'

interface FetchMeteorsResponse {
  meteorData: Array<SimpleMeteor>
  wereDangerousMeteors?: boolean
  count?: number
}

interface EstimatedDiameter {
  meters: number
}

interface RelativeVelocity {
  kilometers_per_second: string
}

interface CloseApproachData {
  close_approach_date_full: string
  relative_velocity: RelativeVelocity
}

interface Meteor {
  id: string
  name: string
  estimated_diameter: EstimatedDiameter
  is_potentially_hazardous_asteroid: boolean
  close_approach_data: Array<CloseApproachData>
}

interface SimpleMeteor
  extends Pick<Meteor, 'id' | 'name' | 'is_potentially_hazardous_asteroid'> {
  diameter: number
  close_approach_date_full: string
  relative_velocity: number
}

export const fetchMeteorsUseCase = async (
  startDate: Date,
  endDate: Date,
  count: boolean,
  wereDangerousMeteors: boolean
): Promise<FetchMeteorsResponse> => {
  const meteorsData = await getMeteorData(startDate, endDate)

  const meteors: Array<SimpleMeteor> = Object.values(meteorsData)
    .flat()
    .map((meteor: unknown) => {
      const m = meteor as Meteor

      return {
        id: m.id,
        name: m.name,
        diameter: m.estimated_diameter.meters,
        is_potentially_hazardous_asteroid: m.is_potentially_hazardous_asteroid,
        close_approach_date_full:
          m.close_approach_data[0].close_approach_date_full,
        relative_velocity: parseFloat(
          m.close_approach_data[0].relative_velocity.kilometers_per_second
        )
      }
    })

  const responseData: FetchMeteorsResponse = { meteorData: meteors }

  if (wereDangerousMeteors) {
    responseData.wereDangerousMeteors = meteors.some(
      (meteor) => meteor.is_potentially_hazardous_asteroid
    )
  }

  if (count) responseData.count = meteors.length

  return responseData
}
