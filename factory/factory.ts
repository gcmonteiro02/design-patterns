interface Campaign {
    name: string;
    type: string;
    maxParticipants: number;
}

interface Factory {
    createCampaign(name: string, type: string): Campaign;
}

class CashbackCampaign implements Factory {
    type = 'cashback';
    maxParticipants = 100;

    createCampaign(name: string): Campaign {
        return {
            name,
            type: this.type,
            maxParticipants: this.maxParticipants
        };
    }
}

class DiscountCampaign implements Factory {
    type = 'discount';
    maxParticipants = 200;

    createCampaign(name: string): Campaign {
        return {
            name,
            type: this.type,
            maxParticipants: this.maxParticipants
        };
    }
}

class CampaignFactory implements Factory {
    createCampaign(name: string, type: string): Campaign {
        switch (type) {
            case 'cashback':
                return new CashbackCampaign().createCampaign(name);
            case 'discount':
                return new DiscountCampaign().createCampaign(name);
            default:
                throw new Error('Campaign type not found.');
        }
    }
}

(function main() {
    const factory = new CampaignFactory();

    console.log(factory.createCampaign('Cashback Campaign', 'cashback'));
    console.log(factory.createCampaign('Discount Campaign', 'discount'));
    console.log(factory.createCampaign('Invalid Campaign', 'invalid'));
})();