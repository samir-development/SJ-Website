
"use client"

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { PlusCircle, Trash2, Edit } from 'lucide-react';

interface Address {
  id: number;
  name: string;
  street: string;
  city: string;
  zip: string;
  isDefault: boolean;
}

const initialAddresses: Address[] = [
  { id: 1, name: 'Home', street: '123 Main St', city: 'Anytown, USA', zip: '12345', isDefault: true },
  { id: 2, name: 'Work', street: '456 Business Ave', city: 'Metropolis, USA', zip: '67890', isDefault: false },
];

export function AddressManager() {
  const [addresses, setAddresses] = useState<Address[]>(initialAddresses);
  const [isAdding, setIsAdding] = useState(false);

  const defaultAddress = addresses.find(a => a.isDefault);
  const otherAddresses = addresses.filter(a => !a.isDefault);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Your Addresses</CardTitle>
        <CardDescription>
          Manage your shipping addresses.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        {defaultAddress && (
          <div>
            <h3 className="font-semibold mb-2">Default Address</h3>
            <div className="p-4 rounded-lg border bg-background flex justify-between items-start">
              <div>
                <p className="font-medium">{defaultAddress.name}</p>
                <p className="text-muted-foreground">{defaultAddress.street}</p>
                <p className="text-muted-foreground">{defaultAddress.city} {defaultAddress.zip}</p>
              </div>
              <div className="flex gap-2">
                <Button variant="ghost" size="icon"><Edit className="h-4 w-4" /></Button>
                <Button variant="ghost" size="icon" className="text-destructive"><Trash2 className="h-4 w-4" /></Button>
              </div>
            </div>
          </div>
        )}
        
        {otherAddresses.length > 0 && (
          <div>
            <h3 className="font-semibold mb-2">Other Addresses</h3>
            <div className="space-y-4">
            {otherAddresses.map(address => (
              <div key={address.id} className="p-4 rounded-lg border flex justify-between items-start">
                 <div>
                  <p className="font-medium">{address.name}</p>
                  <p className="text-muted-foreground">{address.street}</p>
                  <p className="text-muted-foreground">{address.city} {address.zip}</p>
                </div>
                <div className="flex items-center gap-2">
                  <Button variant="link" size="sm">Set as default</Button>
                  <Button variant="ghost" size="icon"><Edit className="h-4 w-4" /></Button>
                  <Button variant="ghost" size="icon" className="text-destructive"><Trash2 className="h-4 w-4" /></Button>
                </div>
              </div>
            ))}
            </div>
          </div>
        )}
        
        <Separator />

        {isAdding ? (
          <form className="space-y-4">
            <h3 className="font-semibold">Add New Address</h3>
            <div className="space-y-2">
              <Label htmlFor="addr-name">Address Nickname</Label>
              <Input id="addr-name" placeholder="e.g. Home, Work" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="addr-street">Street Address</Label>
              <Input id="addr-street" placeholder="123 Main St" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="addr-city">City</Label>
                <Input id="addr-city" placeholder="Anytown" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="addr-zip">ZIP Code</Label>
                <Input id="addr-zip" placeholder="12345" />
              </div>
            </div>
            <div className="flex gap-2">
              <Button>Save Address</Button>
              <Button variant="outline" onClick={() => setIsAdding(false)}>Cancel</Button>
            </div>
          </form>
        ) : (
          <Button variant="outline" onClick={() => setIsAdding(true)}>
            <PlusCircle className="mr-2" />
            Add New Address
          </Button>
        )}
      </CardContent>
    </Card>
  );
}
