import { Monster } from "../../models/interfaces/monster.interface"
import { BattleMonsterCard, BattleMonsterTitle, BattleMonsterImage, BattleMonsterName, BattleMonsterDivider, BattleMonsterStatus, ProgressBar } from "./MonsterBattleCard.styled"

type MonsterCardProps = {
    monster?: Monster | null
    title?: string
}

const MonsterBattleCard: React.FC<MonsterCardProps> = ({ monster, title }) => {
    return (
        <BattleMonsterCard {...(!monster && {centralized: true})} >
            {monster ? (
                <>
                    <BattleMonsterImage
                        src={monster.imageUrl}
                        alt={monster.name}
                    />
                    <BattleMonsterName>{monster.name}</BattleMonsterName>
                    <BattleMonsterDivider />
                    <BattleMonsterStatus>HP</BattleMonsterStatus>
                    <ProgressBar variant="determinate" value={monster.hp}/>
                    <BattleMonsterStatus>Attack</BattleMonsterStatus>
                    <ProgressBar variant="determinate" value={monster.attack}/>
                    <BattleMonsterStatus>Defense</BattleMonsterStatus>
                    <ProgressBar variant="determinate" value={monster.defense}/>
                    <BattleMonsterStatus>Speed</BattleMonsterStatus>
                    <ProgressBar variant="determinate" value={monster.speed}/>
                </>
            ) : (
                <BattleMonsterTitle>{title!}</BattleMonsterTitle>
            )}
        </BattleMonsterCard>
    )
}

export { MonsterBattleCard }