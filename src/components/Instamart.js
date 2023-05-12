import { useState } from 'react'

const Section = ({ title, description, isVisible, setIsVisible }) => {
  return (
    <div className='border border-blue-400 p-2 m-2'>
      <h3 className='font-bold text-xl'>{title}</h3>

      {isVisible ? (
        <>
          <button
            onClick={() => setIsVisible(false)}
            className='cursor-pointer underline'
          >
            HIDE
          </button>
          <p>{description}</p>
        </>
      ) : (
        <button onClick={() => setIsVisible(true)}>SHOW</button>
      )}
    </div>
  )
}

const Instamart = () => {
  const [visibleSection, setVisibleSection] = useState('about')

  return (
    <div className='container mx-auto'>
      <Section
        title={'About Instamart'}
        description={
          'Instamart is a Grocery delivery service that delivers in as little as an hour! We connect you with Personal Shoppers in your area who pick up and deliver your groceries from your favorite local stores.'
        }
        isVisible={visibleSection === 'about'}
        setIsVisible={() => setVisibleSection('about')}
      />

      <Section
        title={'Team Instamart'}
        description={
          'On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures'
        }
        isVisible={visibleSection === 'team'}
        setIsVisible={() => setVisibleSection('team')}
      />

      <Section
        title={'Current Instamart'}
        description={
          ' easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures'
        }
        isVisible={visibleSection === 'current'}
        setIsVisible={() => setVisibleSection('current')}
      />
    </div>
  )
}

export default Instamart
