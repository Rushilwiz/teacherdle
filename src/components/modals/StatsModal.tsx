import Countdown from 'react-countdown'
import { StatBar } from '../stats/StatBar'
import { Histogram } from '../stats/Histogram'
import { GameStats } from '../../lib/localStorage'
import { shareStatus } from '../../lib/share'
import { tomorrow } from '../../lib/words'
import { BaseModal } from './BaseModal'
import {
  STATISTICS_TITLE,
  GUESS_DISTRIBUTION_TEXT,
  NEW_WORD_TEXT,
  SHARE_TEXT,
} from '../../constants/strings'

type Props = {
  isOpen: boolean
  handleClose: () => void
  solution: string
  guesses: string[]
  gameStats: GameStats
  isGameLost: boolean
  isGameWon: boolean
  handleShareToClipboard: () => void
  isHardMode: boolean
  isDarkMode: boolean
  isHighContrastMode: boolean
  numberOfGuessesMade: number
}

export const StatsModal = ({
  isOpen,
  handleClose,
  solution,
  guesses,
  gameStats,
  isGameLost,
  isGameWon,
  handleShareToClipboard,
  isHardMode,
  isDarkMode,
  isHighContrastMode,
  numberOfGuessesMade,
}: Props) => {
  if (gameStats.totalGames <= 0) {
    return (
      <BaseModal
        title={STATISTICS_TITLE}
        isOpen={isOpen}
        handleClose={handleClose}
      >
        <StatBar gameStats={gameStats} />
      </BaseModal>
    )
  }
  return (
    <BaseModal
      title={STATISTICS_TITLE}
      isOpen={isOpen}
      handleClose={handleClose}
    >
      {/* <StatBar gameStats={gameStats} /> */}
      <h4 className="text-lg leading-6 font-large text-gray-900 dark:text-gray-100">
        Congrats on doing Wordle Wednesday. For your prize, head to the Physics
        Commons break room!
      </h4>
      <img
        className="img-fluid mt-4 rounded mx-auto d-block"
        src="data:image/jpeg;base64,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"
      ></img>
      <h4 className="text-lg mt-4 leading-6 font-medium text-gray-900 dark:text-gray-100">
        {GUESS_DISTRIBUTION_TEXT}
      </h4>
      <Histogram
        gameStats={gameStats}
        isGameWon={isGameWon}
        numberOfGuessesMade={numberOfGuessesMade}
      />
      {(isGameLost || isGameWon) && (
        <div className="mt-5 sm:mt-6 columns-1 dark:text-white">
          {/* <div>
            <h5>{NEW_WORD_TEXT}</h5>
            <Countdown
              className="text-lg font-medium text-gray-900 dark:text-gray-100"
              date={tomorrow}
              daysInHours={true}
            />
          </div> */}
          <button
            type="button"
            className="mt-2 w-full rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:text-sm"
            onClick={() => {
              shareStatus(
                solution,
                guesses,
                isGameLost,
                isHardMode,
                isDarkMode,
                isHighContrastMode,
                handleShareToClipboard
              )
            }}
          >
            {SHARE_TEXT}
          </button>
        </div>
      )}
    </BaseModal>
  )
}
