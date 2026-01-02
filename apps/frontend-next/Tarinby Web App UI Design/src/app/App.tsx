import React, { useState } from 'react';
import { LandingPage } from './pages/LandingPage';
import { NeedRegistration } from './pages/NeedRegistration';
import { OpportunitiesList } from './pages/OpportunitiesList';
import { OpportunityDetail } from './pages/OpportunityDetail';
import { SellerOnboarding } from './pages/SellerOnboarding';
import { ComponentLibrary } from './pages/ComponentLibrary';

type Screen = 
  | 'landing'
  | 'need-registration'
  | 'opportunities'
  | 'opportunity-detail'
  | 'seller-onboarding'
  | 'component-library';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>('landing');
  const [selectedOpportunityId, setSelectedOpportunityId] = useState<number | null>(null);

  // Check if URL has component-library parameter for dev handoff
  React.useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('view') === 'components') {
      setCurrentScreen('component-library');
    }
  }, []);

  const renderScreen = () => {
    switch (currentScreen) {
      case 'landing':
        return (
          <LandingPage
            onRegisterNeed={() => setCurrentScreen('need-registration')}
            onViewOpportunities={() => setCurrentScreen('opportunities')}
          />
        );

      case 'need-registration':
        return (
          <NeedRegistration
            onBack={() => setCurrentScreen('landing')}
            onComplete={() => setCurrentScreen('opportunities')}
          />
        );

      case 'opportunities':
        return (
          <OpportunitiesList
            onBack={() => setCurrentScreen('landing')}
            onViewDetail={(id) => {
              setSelectedOpportunityId(id);
              setCurrentScreen('opportunity-detail');
            }}
          />
        );

      case 'opportunity-detail':
        return (
          <OpportunityDetail
            onBack={() => setCurrentScreen('opportunities')}
          />
        );

      case 'seller-onboarding':
        return (
          <SellerOnboarding
            onBack={() => setCurrentScreen('landing')}
          />
        );

      case 'component-library':
        return (
          <ComponentLibrary
            onBack={() => setCurrentScreen('landing')}
          />
        );

      default:
        return (
          <LandingPage
            onRegisterNeed={() => setCurrentScreen('need-registration')}
            onViewOpportunities={() => setCurrentScreen('opportunities')}
          />
        );
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {renderScreen()}

      {/* Dev Navigation Helper - Only visible in dev */}
      {process.env.NODE_ENV === 'development' && (
        <div className="fixed bottom-4 left-4 bg-card border border-border rounded-xl p-4 shadow-xl z-50 max-w-xs">
          <div className="text-xs font-semibold mb-2 text-muted-foreground">Dev Navigation</div>
          <div className="space-y-1 text-xs">
            <button onClick={() => setCurrentScreen('landing')} className="block w-full text-left px-2 py-1 hover:bg-muted/50 rounded">
              Landing
            </button>
            <button onClick={() => setCurrentScreen('need-registration')} className="block w-full text-left px-2 py-1 hover:bg-muted/50 rounded">
              Need Registration
            </button>
            <button onClick={() => setCurrentScreen('opportunities')} className="block w-full text-left px-2 py-1 hover:bg-muted/50 rounded">
              Opportunities List
            </button>
            <button onClick={() => setCurrentScreen('opportunity-detail')} className="block w-full text-left px-2 py-1 hover:bg-muted/50 rounded">
              Opportunity Detail
            </button>
            <button onClick={() => setCurrentScreen('seller-onboarding')} className="block w-full text-left px-2 py-1 hover:bg-muted/50 rounded">
              Seller Onboarding
            </button>
            <button onClick={() => setCurrentScreen('component-library')} className="block w-full text-left px-2 py-1 hover:bg-muted/50 rounded">
              Component Library
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
